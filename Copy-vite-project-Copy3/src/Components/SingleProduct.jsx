import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductbyId } from '../API';
import ProductCard from './ProductCard/ProductCard';


export default function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProductData() {
      try {
        const productObj = await getProductbyId(id);
        if (!productObj) {
          // Product not found
          navigate('/');
        } else {
          setProduct(productObj);
        }
      } catch (err) {
        setError('Error fetching product details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getProductData();
  }, [id, navigate]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {loading && <p>Loading product details...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <ProductCard item={product} component={'detail'} />}
    </div>
  );  
}
