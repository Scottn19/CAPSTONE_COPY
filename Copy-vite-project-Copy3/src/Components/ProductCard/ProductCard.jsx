import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { getProducts } from '../../API/index';
import "./ProductCard.css"

export default function ProductCard({item, component}) {
    const {id, title, price, description, category, image} = item;
    const navigate = useNavigate();

    const pricedFormatted = price.toFixed(2);

  return (
    <div className="product-card-container">
      <h2>{title}</h2>
      <img src={image} alt={`A lovely ${title}`}/>
      <h3>${pricedFormatted}</h3>
      <h3>{category}</h3>
      <h3>{description}</h3>

      {component !== "detail" && (
        <>
        <button onClick={()=>navigate(`/products/${id}`)}>See Details</button>  
        <button onClick={() => addToCart(item)}>Add to Cart</button>
        </>
  )}  
    </div>
    
  ); 
}
