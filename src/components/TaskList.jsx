import { useTask } from "../Context(Store)/ContextStore";

const TaskList = () => {
  const { todos, handleToggle, handleDelete } = useTask();

  const incompleteTask = todos.filter(todo => !todo.completed);
  const completeTask = todos.filter(todo => todo.completed);

  return (
    <div className="flex justify-center items-start gap-8 mt-8">
      
      {/* Pending Tasks */}
      <div className="w-[330px] max-h-[400px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-red-500">
            Pending Tasks {incompleteTask.length === 0 ? '😊' : '😢'}

        </h2>
        <h2 className="text-[15px] mb-2 text-center text-black-300">
          Tasks Count : {incompleteTask.length}
        </h2>
        <ul className="space-y-2">
          {incompleteTask.map(todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
              <label className="flex items-center gap-2 cursor-pointer w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleToggle(todo.id);
                    }
                  }}
                />
                <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => {
                  
                  handleDelete(todo.id);
                }}
                className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
              >
                X
              </button>
            </li>
          ))}
        </ul>

      </div>

      {/* Completed Tasks */}
      <div className="w-[330px] max-h-[400px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-500">
          Completed Tasks 😊
        </h2>
        <h2 className="text-[15px] mb-2 text-center text-black-300">
          Achievement Count : {completeTask.length}
        </h2>
        <ul className="space-y-2">
          {completeTask.map(todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
              <label className="flex items-center gap-2 cursor-pointer w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleToggle(todo.id);
                    }
                  }}
                />
                <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => {
                
                  handleDelete(todo.id);
                }}
                className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TaskList;













// // src/components/TaskList.jsx
// // import { useTask } from "../context/TaskContext";

// import { useTask } from "../Context(Store)/ContextStore";

// const TaskList = () => {
//   const { todos, handleToggle, handleDelete } = useTask();

//   const incompleteTask = todos.filter(todo => !todo.completed);
//   const completeTask = todos.filter(todo => todo.completed);

//   const renderList = (tasks, type) => (
//     <div className="w-[330px] max-h-[400px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
//       <h2 className={`text-2xl font-bold mb-2 text-center ${type === 'pending' ? 'text-red-500' : 'text-green-500'}`}>
//         {type === 'pending' ? 'Pending Tasks 😢' : 'Completed Tasks 😊'}
//       </h2>
//       <h2 className="text-[15px] mb-2 text-center text-black-300">
//         {type === 'pending' ? `Tasks Count : ${tasks.length}` : `Achievement Count : ${tasks.length}`}
//       </h2>
//       <ul className="space-y-2">
//         {tasks.map(todo => (
//           <li key={todo.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
//             <label className="flex items-center gap-2 cursor-pointer w-full">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleToggle(todo.id)}
//                 onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                     handleToggle(todo.id);
//                     }
//                 }}
//               />
//               <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
//                 {todo.text}
//               </span>
//             </label>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleDelete(todo.id);
//               }}
//               className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 font-bold text-xl ml-2"
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="flex justify-center items-start gap-8 mt-8">
//       {renderList(incompleteTask, "pending")}
//       {renderList(completeTask, "completed")}
//     </div>
//   );
// };

// export default TaskList;
