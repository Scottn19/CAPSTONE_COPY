import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import { getProducts } from '../API';
import Cart from './CartPage/Cart';


export default function GetAllProducts() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      getProducts()
        .then(products => setProducts(products))
        .catch(console.error);
    }, []);


  function addToCart(item) {
    const isItemAlreadyInCart = cartItems.find(cartItem => cartItem.id === item.id);

    // If the item is in the cart, add 1 to the quantity
    if (isItemAlreadyInCart) {
      // * I updated this to be a bit more readable IMO. While it is more verbose,
      // * I think it's more obvious what it does off the bat
      setCartItems(prevCartItems => {
        return prevCartItems.map(cartItem => {
          const isCartItemToUpdate = cartItem.id === item.id;

          if (isCartItemToUpdate) {
            return {...cartItem, quantity: cartItem.quantity + 1};
          }

          return cartItem;
        });
      });
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems(prevCartItems => [...prevCartItems, {...item, quantity: 1}]);
    }
  }



  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {products.map((singleProduct) => (
        <ProductCard key={singleProduct.id} item={singleProduct} addToCart={addToCart} />
      ))}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}
