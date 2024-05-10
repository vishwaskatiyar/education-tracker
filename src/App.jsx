import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ShowData from "./Component/ShowData";

const Todo = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );
  const [value, setValue] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    updateLocalData();
  }, [data]);

  const updateLocalData = () => {
    localStorage.setItem("user", JSON.stringify(data)); // Corrected key to "user"
  };

  const handleSubmit = () => {
    if (value === "") {
      alert("Please enter a value");
    } else {
      const id = uuidv4(); // Call uuidv4 to generate a unique ID
      setData([...data, { id, name: value, hour: parseInt(hour) }]);
      alert("Your list has been added");
      setValue("");
      setHour(0); // Set hour to 0
    }
  };

  const handleIncrement = (index) => {
    const updatedData = [...data];
    updatedData.forEach((ele) => {
      if (ele.id === index) {
        ele.hour += 1;
      }
    });
    setData(updatedData);
  };

  const handleDecrement = (index) => {
    const updatedData = [...data];
    updatedData.forEach((ele) => {
      if (ele.id === index && ele.hour > 0) {
        ele.hour -= 1;
      }
    });
    setData(updatedData);
  };

  const handleEdit = (index) => {
    if (value || hour) {
      return;
    }
    const updatedData = [...data];
    const editData = updatedData.find((ele) => ele.id === index);

    setValue(editData.name);
    setHour(editData.hour);

    setData(updatedData.filter((ele) => ele.id !== index)); // Filter out the edited item
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((ele) => ele.id !== index);
    setData(updatedData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Todo List
          </h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Add Your List"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Hours"
              className="w-24 px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add List
            </button>
          </div>
          <div className="space-y-4">
            {data.map((item) => (
              <ShowData
                name={item.name}
                hour={item.hour}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
                onDelete={() => handleDelete(item.id)}
                onEdit={() => handleEdit(item.id)}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
