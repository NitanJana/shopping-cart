import PropTypes from 'prop-types';
const DeleteButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="group flex h-[50px] w-[150px] cursor-pointer items-center rounded border-none bg-[#e62222] shadow-[1px_1px_3px_rgba(0,0,0,0.15)] transition-all duration-200 focus:outline-none group-hover:bg-[#ff3636]"
    >
      <span className="translate-x-[35px] font-bold text-white transition-all group-hover:text-transparent">
        Delete
      </span>
      <span className="absolute flex h-10 w-10 translate-x-28 items-center justify-center border-l-[1px] border-[#c41b1b] transition-all group-hover:w-[150px] group-hover:translate-x-0 group-hover:border-l-0">
        <svg
          className="w-[15px] fill-[#eee] group-active:scale-[0.8]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
        </svg>
      </span>
    </button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
