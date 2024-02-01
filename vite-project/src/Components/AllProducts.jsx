import {useEffect, useState} from "react"
import ProductCard from '../Components/ProductCard/ProductCard'
import { getProducts } from "../API";
import Cart from "./CartPage/Cart";


export default function GetAllProducts() {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=> {
        async function getProductData(){
            try{
                const products = await getProducts();
                setProducts(products);
            }catch(err){
                console.log(err)
            }
        }
        getProductData();
    }, []);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is in the cart, update the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };



  return (
  <div style={{display: 'flex', 
            flexWrap: "wrap",
            justifyContent: "space-between"
            }}>
            {products.map((SingleProduct) => (
            <ProductCard key={SingleProduct.id} item={SingleProduct}/>
            ))}
           <Cart cartItems={cartItems} setCartItems={setCartItems} />

  </div>);}
// return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//       {/* Display products */}
//       {products.map((SingleProduct) => (
//         <ProductCard key={SingleProduct.id} item={SingleProduct} addToCart={addToCart} />
//       ))}

//       {/* Display the cart */}
//       <Cart cartItems={cartItems} setCartItems={setCartItems} />
//     </div>
//   );
// }
