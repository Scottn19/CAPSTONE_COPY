import Product from "../Components/SingleProduct";

async function getProducts(category = '') {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
  
      const res = await fetch(url);
      const json = await res.json();
  
      return json;
    } catch (error) {
      throw error;
    }
  }
  
async function getProductbyId(id) {
    try {
        const res = await fetch(
            `https://fakestoreapi.com/products/${id}`
            );
        const product = await res.json();
        return product;
    } catch (error) {
        throw error;
    }
}
 export { getProducts, getProductbyId };