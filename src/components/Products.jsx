import PropTypes from 'prop-types';

const Products = ({ products }) => {
  return (
    <div className="grid auto-rows-fr grid-cols-[repeat(_auto-fit,_minmax(250px,_1fr))] justify-items-center gap-x-4 gap-y-6 px-2 py-6">
      {products.map((product) => {
        return (
          <div key={product.id} className="grid grid-rows-[250px,auto,auto] gap-1">
            <div className="flex items-center justify-center">
              <img src={product.image} alt={product.title} className="h-[200px] w-[200px] object-contain" />
            </div>
            <p className="flex justify-center px-6  text-center text-sm">{product.title}</p>
            <p className="flex items-end justify-center px-4 text-center text-xl font-medium">${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};