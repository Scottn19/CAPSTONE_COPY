import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css"

export default function ProductCard({Item, component}) {
    const {id, title, price, description, category, image} = Item;
    const navigate = useNavigate();
  return (
    <div className="product-card-container">
      <h2>{title}</h2>
    <img src={image} alt={`A lovely ${title}`}/>
    <h3>{price}</h3>
    <h3>{category}</h3>
    <h3>{description}</h3>
      {component !== "detail" && (<button onClick={()=>navigate(`/products/${id}`)}>See Details</button>)}     </div>
  ); 
}
