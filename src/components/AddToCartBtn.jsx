import PropTypes from 'prop-types';
const AddToCartBtn = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="group flex h-[50px] w-[140px] cursor-pointer items-center rounded border-none bg-green-500 shadow-[1px_1px_3px_rgba(0,0,0,0.15)] transition-all duration-200 focus:outline-none group-hover:bg-green-400"
    >
      <span className="translate-x-[30px] font-bold text-white transition-all group-hover:text-transparent">Cart</span>
      <span className="absolute flex h-10 w-10 translate-x-24 items-center justify-center border-l-[1px] border-green-600 transition-all group-hover:w-[140px] group-hover:translate-x-0 group-hover:border-l-0">
        <svg
          className="w-[20px] fill-[#eee] group-active:scale-[0.8]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 -960 960 960"
        >
          <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default AddToCartBtn;

AddToCartBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
