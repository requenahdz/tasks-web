import PropTypes from "prop-types";

const Status = ({ color, label }) => {
  return (
    <div
      className={`text-white  text-center text-sm	rounded-xl	 p-1 font-semibold bg-${color}`}
    >
      {label}
    </div>
  );
};

Status.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Status;
