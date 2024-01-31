import React, {useEffect, useState} from "react"
import { ProductCard }  from '../Components/ProductCard/ProductCard'
import { getProducts } from "../API";


export default function getAllProducts() {
    const [Products, setProducts] = useState([])
    useEffect(()=> {
        async function getProductData(){
            try{
                const Products = await getProducts();
                setProducts(Products);
            }catch(err){
                console.log(err)
            }
        }
        getProductData();
    }, []);
  return (
  <div style={{display: 'flex', 
               flexWrap: "wrap",
               justifyContent: "space-between"
               }}>
    {Products.map((SingleProduct) => (
        <ProductCard key={SingleProduct.id} Item={SingleProduct}/>
    ))}
  </div>
  );
}
