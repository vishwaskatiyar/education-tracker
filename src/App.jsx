import React from "react";

const Todo = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1627850631366-08eb5d7b0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9kb2xpc3R8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full rounded-md"
            />
            <figcaption className="text-center mt-2 text-gray-700">
              Add Your List
            </figcaption>
          </figure>
        </div>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Add Your List"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add List
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Apple</h3>
            <button className="text-red-500 hover:text-red-600 focus:outline-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
