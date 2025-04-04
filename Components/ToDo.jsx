import React from 'react'

const ToDo = ({ 
  id = 0, 
  title = '', 
  description = '', 
  complete = false, 
  mongoId = '', 
  deleteTodo = () => {}, 
  completeTodo = () => {}, 
  undoComplete = () => {} 
}) => {
  // Check if required props are valid
  if (!mongoId || typeof deleteTodo !== 'function') {
    return null;
  }

  return (
    <tr className="bg-[#BAD4AA] hover:bg-[#EBF5DF] border-b-2 border-[#D9E3CD] last:border-b-0 transition-colors duration-200">
      <td className="px-4 py-4 text-[#2C3639]">{id + 1}</td>
      <td className={`px-4 py-4 text-[#2C3639] ${complete ? 'line-through opacity-50' : ''}`}>
        {title}
      </td>
      <td className={`px-4 py-4 text-[#2C3639] ${complete ? 'line-through opacity-50' : ''}`}>
        {description}
      </td>
      <td className="px-4 py-4">
        <span className={`font-medium ${complete ? 'text-[#3F4E4F]' : 'text-[#2C3639]'}`}>
          {complete ? "Completed" : "Pending"}
        </span>
      </td>
      <td className="px-4 py-4 flex gap-2">
        <button
          onClick={() => mongoId && deleteTodo(mongoId)}
          className="bg-[#2C3639] hover:bg-[#3F4E4F] text-[#EBF5DF] px-3 py-1.5 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium"
        >
          Delete
        </button>
        {!complete ? (
          <button
            onClick={() => mongoId && completeTodo(mongoId)}
            className="bg-[#BAD4AA] hover:bg-[#EBF5DF] text-[#2C3639] px-3 py-1.5 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium border border-[#2C3639]"
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => mongoId && undoComplete(mongoId)}
            className="bg-[#EBF5DF] hover:bg-[#BAD4AA] text-[#2C3639] px-3 py-1.5 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium border border-[#2C3639]"
          >
            Undo
          </button>
        )}
      </td>
    </tr>
  );
};

export default ToDo;