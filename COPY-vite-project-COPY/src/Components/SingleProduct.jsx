import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductbyId } from '../API';
import ProductCard from './ProductCard/ProductCard';


export default function Product() {
  const navigate = useNavigate();
  const [ product, setProduct] = useState({});
  const {id} = useParams();


  useEffect(() => {
      async function getProductData(){
          try{
              const productObj = await getProductbyId(id);
              if(productObj.data === null){
                  navigate("/")
              }
              setProduct(productObj)
      }catch(err){
          console.log(err);
      }
  }
  getProductData();
}, [navigate]);

// async function handleDelete(){
//     try{
//         const result = await deletePlayer(id);
//         if(result.success){
//             alert("Puppy successfully deleted!");
//             navigate("/");
        
      //   }else{
      //     alert("Something went wrong with deleting the puppy! Please try again!")
      //   }
      
//     }catch(err)
//     {console.log(err)}
// }

   return (
   <div style={{display: 'flex',
   flexDirection: "column",
   justifyContent: 'center',
   alignItems: 'center'
   }}>
      <ProductCard Item={product} component={"detail"}/>
      {/* <button onClick={handleDelete}>Remove Product From Cart</button> */}
          </div>
   );
}