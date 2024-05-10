import PropTypes from "prop-types";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const ShowData = ({
  name,
  hour,
  onIncrement,
  onDecrement,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center">
        <span className="text-lg font-semibold">{name}</span>
        <span className="mx-2 text-gray-400 font-semibold">:</span>
        <span className="text-gray-600 font-semibold">{hour}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onDecrement}
          className="text-gray-400 rounded-full hover:bg-gray-100 p-2 focus:outline-none transition duration-300"
        >
          <FaMinus className="text-lg" />
        </button>
        <button
          onClick={onIncrement}
          className="text-blue-500 rounded-full hover:bg-blue-50 p-2 focus:outline-none transition duration-300"
        >
          <IoAddCircleOutline className="text-lg" />
        </button>
        <button
          onClick={onEdit}
          className="text-gray-400 rounded-full hover:bg-gray-100 p-2 focus:outline-none transition duration-300"
        >
          <MdEdit className="text-lg" />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 rounded-full hover:bg-red-50 p-2 focus:outline-none transition duration-300"
        >
          <MdDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
};

ShowData.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ShowData;
