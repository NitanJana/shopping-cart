import { useLocation, useNavigate } from 'react-router-dom';
import useFetchImg from '../hooks/useFetchImg';

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;

  const { image, error, loading } = useFetchImg(product.image);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>{product.title}</p>
      <img src={URL.createObjectURL(image)} alt={product.title} className="max-w-[300px]" />
      <p>{product.price}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Product;
