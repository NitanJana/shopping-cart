import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Router';

const Products = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="grid auto-rows-fr grid-cols-[repeat(_auto-fit,_minmax(250px,_1fr))] justify-items-center gap-x-4 gap-y-6 px-2 py-6">
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} state={{ product }} key={product.id}>
            <div className="grid h-full grid-rows-[250px,auto,auto] gap-1">
              <div className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px] w-[200px] object-contain"
                  loading="lazy"
                />
              </div>
              <p className="flex justify-center px-6  text-center text-sm">{product.title}</p>
              <p className="flex items-end justify-center px-4 text-center text-xl font-medium">${product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
