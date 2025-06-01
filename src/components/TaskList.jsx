import { useTask } from "../Context(Store)/ContextStore";
import { useState } from "react";

const TaskList = () => {
  const { todos, handleToggle, handleDelete } = useTask();
  const [view, setView] = useState("pending");

  const incompleteTask = todos.filter((todo) => !todo.completed);
  const completeTask = todos.filter((todo) => todo.completed);

  return (
    <>
      {/* Mobile toggle buttons */}
      <div className="flex gap-4 mt-4 md:hidden justify-center">
        <button
          className={`px-4 py-2 rounded-full font-semibold ${
            view === "pending"
              ? "bg-blue-500 border-2 border-blue-800 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setView("pending")}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold ${
            view === "completed"
              ? "bg-green-500 border-2 border-green-700 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setView("completed")}
        >
          Completed
        </button>
      </div>

      <div className="flex justify-center items-start gap-8 mt-3">
        {/* {for laptop} */}
        <div className="hidden md:block w-[330px]">
          <div className="w-full bg-white shadow-md rounded-lg pb-4 max-h-[600px] overflow-y-scroll">
            <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
              <h2 className="text-3xl mb-1 text-center text-blue-500">
                Pending Tasks {incompleteTask.length === 0 ? "😊" : "😢"}
              </h2>
              <h2 className="text-[15px] text-center text-black-300">
                (Tasks Count : {incompleteTask.length})
              </h2>
            </div>

            <ul className="space-y-2 px-4">
              {incompleteTask.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => handleToggle(todo.id)}
                  className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-2 w-[calc(100%-58px)]">
                    <input
                      type="checkbox"
                      id="input-check-box"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      onClick={(e) => e.stopPropagation()} // prevent li click
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleToggle(todo.id);
                      }}
                    />
                    <span className="text-gray-700 break-words w-full">
                      {todo.text}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent li click
                      handleDelete(todo.id);
                    }}
                    className="text-red-500 shrink-0 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block w-[330px]">
          <div className="w-full bg-white shadow-md rounded-lg pb-4 max-h-[600px] overflow-y-scroll">
            <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
              <h2 className="text-3xl mb-1 text-center text-green-500">
                Completed Tasks 😊
              </h2>
              <h2 className="text-[15px] text-center text-black-300">
                (Achievement Count : {completeTask.length})
              </h2>
            </div>

            <ul className="space-y-2 px-4">
              {completeTask.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => handleToggle(todo.id)}
                  className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
                >
                  <div className="flex items-center gap-2 w-[calc(100%-58px)]">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleToggle(todo.id);
                      }}
                    />
                    <span className="line-through break-words w-full text-gray-400">
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
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

        {/* for small screen , i guess for  */}
        <div className="w-full md:hidden mt-4">
          {view === "pending" && (
            <div className="w-full bg-white shadow-md rounded-lg pb-4 max-h-[500px] overflow-y-scroll">
              <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
                <h2 className="text-3xl mb-1 text-center text-blue-500">
                  Pending Tasks {incompleteTask.length === 0 ? "😊" : "😢"}
                </h2>
                <h2 className="text-[15px] text-center text-black-300">
                  (Tasks Count : {incompleteTask.length})
                </h2>
              </div>

              <ul className="space-y-2 px-4">
                {incompleteTask.map((todo) => (
                  <li
                    key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
                  >
                    <div className="flex items-center gap-2 w-[calc(100%-58px)]">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggle(todo.id)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleToggle(todo.id);
                        }}
                      />
                      <span className="text-gray-700 break-words w-full">
                        {todo.text}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
          )}

          {view === "completed" && (
            <div className="w-full bg-white shadow-md rounded-lg pb-4 max-h-[500px] overflow-y-scroll">
              <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
                <h2 className="text-3xl mb-1  text-center text-green-500">
                  Completed Tasks 😊
                </h2>
                <h2 className="text-[15px] text-center text-black-300">
                  (Achievement Count : {completeTask.length})
                </h2>
              </div>

              <ul className="space-y-2 px-4">
                {completeTask.map((todo) => (
                  <li
                    key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
                  >
                    <div className="flex items-center gap-2 w-[calc(100%-58px)]">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggle(todo.id)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleToggle(todo.id);
                        }}
                      />
                      <span
                        className={`break-words w-full ${
                          todo.completed
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;

// import { useTask } from "../Context(Store)/ContextStore";
// import { useState } from "react";

// const TaskList = () => {
//   const { todos, handleToggle, handleDelete } = useTask();
//   const [view, setView] = useState("pending");

//   const incompleteTask = todos.filter((todo) => !todo.completed);
//   const completeTask = todos.filter((todo) => todo.completed);

//   const TaskSection = ({ title, emoji, count, tasks }) => (
//     <div className="w-full bg-white shadow-md rounded-lg pb-4 max-h-[600px] overflow-y-scroll">
//       <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
//         <h2
//           className={`text-3xl font-bold text-center ${
//             title === "Pending Tasks" ? "text-red-500" : "text-green-500"
//           }`}
//         >
//           {title} {emoji}
//         </h2>
//         <h2 className="text-[15px] text-center text-black-300">
//           {title === "Pending Tasks" ? "Tasks Count" : "Achievement Count"} :{" "}
//           {count}
//         </h2>
//       </div>

//       <ul className="space-y-2 px-4">
//         {tasks.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
//           >
//             <label className="flex items-center gap-2 cursor-pointer w-full">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleToggle(todo.id)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") handleToggle(todo.id);
//                 }}
//               />
//               <span
//                 className={
//                   todo.completed
//                     ? "line-through text-gray-400"
//                     : "text-gray-700"
//                 }
//               >
//                 {todo.text}
//               </span>
//             </label>
//             <button
//               onClick={() => handleDelete(todo.id)}
//               className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <>
//       {/* Mobile toggle buttons */}
//       <div className="flex gap-4 mt-4 md:hidden justify-center">
//         <button
//           className={`px-4 py-2 rounded-full font-semibold ${
//             view === "pending"
//               ? "bg-red-500 text-white"
//               : "bg-gray-200 text-black"
//           }`}
//           onClick={() => setView("pending")}
//         >
//           Pending
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full font-semibold ${
//             view === "completed"
//               ? "bg-green-500 text-white"
//               : "bg-gray-200 text-black"
//           }`}
//           onClick={() => setView("completed")}
//         >
//           Completed
//         </button>
//       </div>

//       {/* Responsive layout */}
//       <div className="flex justify-center items-start gap-8 mt-8">
//         {/* Desktop: Show both */}
//         <div className="hidden md:block w-[330px]">
//           <TaskSection
//             title="Pending Tasks"
//             emoji={incompleteTask.length === 0 ? "😊" : "😢"}
//             count={incompleteTask.length}
//             tasks={incompleteTask}
//           />
//         </div>
//         <div className="hidden md:block w-[330px]">
//           <TaskSection
//             title="Completed Tasks"
//             emoji="😊"
//             count={completeTask.length}
//             tasks={completeTask}
//           />
//         </div>

//         {/* Mobile: Show one based on state */}
//         <div className="w-full md:hidden mt-4">
//           {view === "pending" ? (
//             <TaskSection
//               title="Pending Tasks"
//               emoji={incompleteTask.length === 0 ? "😊" : "😢"}
//               count={incompleteTask.length}
//               tasks={incompleteTask}
//             />
//           ) : (
//             <TaskSection
//               title="Completed Tasks"
//               emoji="😊"
//               count={completeTask.length}
//               tasks={completeTask}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TaskList;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { useTask } from "../Context(Store)/ContextStore";

// const TaskList = () => {
//   const { todos, handleToggle, handleDelete } = useTask();

//   const incompleteTask = todos.filter((todo) => !todo.completed);
//   const completeTask = todos.filter((todo) => todo.completed);

//   return (
//     <div className="flex justify-center items-start gap-8 mt-8">
//       {/* Pending Tasks Container */}
//       <div className="w-[330px] bg-white shadow-md rounded-lg pb-4 max-h-[600px] overflow-y-scroll">
//         {/* Sticky Header */}
//         <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
//           <h2 className="text-3xl font-bold text-center text-red-500">
//             Pending Tasks {incompleteTask.length === 0 ? "😊" : "😢"}
//           </h2>
//           <h2 className="text-[15px] text-center text-black-300">
//             Tasks Count : {incompleteTask.length}
//           </h2>
//         </div>

//         {/* Scrollable Task List */}
//         <ul className="space-y-2 px-4">
//           {incompleteTask.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
//             >
//               <label className="flex items-center gap-2 cursor-pointer w-full">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleToggle(todo.id)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       handleToggle(todo.id);
//                     }
//                   }}
//                 />
//                 <span
//                   className={
//                     todo.completed
//                       ? "line-through text-gray-400"
//                       : "text-gray-700"
//                   }
//                 >
//                   {todo.text}
//                 </span>
//               </label>
//               <button
//                 onClick={() => handleDelete(todo.id)}
//                 className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
//               >
//                 X
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* completed task */}
//       <div className="w-[330px] bg-white shadow-md rounded-lg pb-4 max-h-[600px] overflow-y-scroll ">
//         {/* Sticky Header */}
//         <div className="sticky top-0 bg-white z-10 pb-2 pt-4">
//           <h2 className="text-3xl font-bold text-center text-green-500">
//             Completed Tasks 😊
//           </h2>
//           <h2 className="text-[15px] text-center text-black-300">
//             Achievement Count : {completeTask.length}
//           </h2>
//         </div>

//         {/* Scrollable Task List */}
//         <ul className="space-y-2 px-4">
//           {completeTask.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
//             >
//               <label className="flex items-center gap-2 cursor-pointer w-full">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleToggle(todo.id)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       handleToggle(todo.id);
//                     }
//                   }}
//                 />
//                 <span
//                   className={
//                     todo.completed
//                       ? "line-through text-gray-400"
//                       : "text-gray-700"
//                   }
//                 >
//                   {todo.text}
//                 </span>
//               </label>
//               <button
//                 onClick={() => handleDelete(todo.id)}
//                 className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 focus:bg-amber-600 font-bold text-xl ml-2"
//               >
//                 X
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TaskList;

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
