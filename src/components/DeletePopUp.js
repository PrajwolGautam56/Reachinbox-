import React from "react";

function DeletePopUp({ onCancel, onDelete }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-[#1F1F1F] p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-bold dark:text-white">
          Are you sure you want to delete this email?
        </h2>
        <div className="flex justify-end space-x-4 pt-4">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
