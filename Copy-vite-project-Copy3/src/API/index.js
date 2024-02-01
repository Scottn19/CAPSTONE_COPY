async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return products;
  } catch (err) {
    console.error(err);
  }
}
async function getProductbyId(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    // Renamed json to product to be more readable- getProductById now returns a
    // 'product' vs returning 'json'(visually anyway, it still returns the same object of course)
    const product = await res.json();

    return product;
  } catch (err) {
    // Changed this from throw error to this because if you just throw
    // the same error, there's not a point to the try/catch
    console.error(err);
  }
}

export { getProducts, getProductbyId };