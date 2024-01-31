async function getProducts(){
    try {
        const res = await fetch(
            " https://fakestoreapi.com/products"
            );
        const json = await res.json();
        
        return json.data.products;
    } catch (error) {
        throw error;
    }
}
async function getProductbyId(id) {
    try {
        const res = await fetch(
            `https://fakestoreapi.com/products/${id}`
            );
        const json = await res.json();
        return json.data.product;
    } catch (error) {
        throw error;
    }
}
 export { getProducts, getProductbyId };