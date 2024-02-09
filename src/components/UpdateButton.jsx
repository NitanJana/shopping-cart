import PropTypes from 'prop-types';
const UpdateButton = ({ type, handleClick }) => {
  return (
    <button onClick={handleClick} className="flex h-6 w-12 items-center justify-center bg-teal-500 text-white">
      <img src={`/${type}.svg`} alt={`${type}`} />
    </button>
  );
};

export default UpdateButton;

UpdateButton.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
