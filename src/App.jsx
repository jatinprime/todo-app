import InputBar from "./components/InputBar";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./Context(Store)/ContextStore";
// import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-200 flex justify-center pt-45 px-4">
        <div className="w-full max-w-[700px]">
          <InputBar />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;





// import { useState } from "react";
// // import { useEffect , useRef } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);

//   // const inputRef = useRef();

//   // useEffect(() => {
//   //   inputRef.current.focus(); 
//   // }, []);

//   const handleAdd = () => {
//     if(task.trim() === ""){
//       alert("Empty task can't be Added !!") ;
//       return ;
//     }

//       setTodos([...todos, { text: task, id: Date.now(), completed: false }]);
//       setTask("");
    
//   };

//   const handleToggle = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   let incompleteTask = todos.filter(todo => !todo.completed) ;

//   let completeTask =  todos.filter(todo => todo.completed) ;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-200 flex justify-center pt-20 px-4">
//       <div className="w-full max-w-[700px]">
//         {/* Input section */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Todo List</h1>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               // ref={inputRef}
//               autoFocus
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleAdd();
//                 }
//               }}
//               placeholder="Enter a task..."
//               className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={handleAdd}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Add
//             </button>
//           </div>
//         </div>

//         {/* /* box containing my todos - but abhi single box hi hai */}

//         {/* <div className="bg-white mt-6 p-4 todo-container rounded-lg shadow-md max-h-[400px] overflow-y-scroll">
//           {todos.length === 0 ? (
//             <p className="text-center text-gray-500">No tasks yet</p>
//           ) : (
//            <ul className="space-y-2">
//             {todos.map((todo) => (
//               <li
//                 key={todo.id}
//                 onClick={() => handleToggle(todo.id)} // make full row clickable
//                 className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
//               >
//                 <div className="flex items-center gap-3 w-full">
//                  <input
//                     type="checkbox"
//                     checked={todo.completed}
//                     onChange={() => handleToggle(todo.id)}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter') {
//                         handleToggle(todo.id);
//                       }
//                     }}
//                     className="cursor-pointer w-6 h-6 bg-white border-2 border-gray-400 rounded checked:bg-green-500 checked:border-green-500"
//                   />

//                   <span
//                     className={
//                       `text-xl ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`
//                     }
//                   >
//                     {todo.text}
//                   </span>


//                 </div>

//                   <button
//                     // onClick={() => handleDelete(todo.id)}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDelete(todo.id);
//                     }}
//                     className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 font-bold text-3xl ml-2"
//                     title="Delete task"
//                   >
//                     &times;
//                   </button>
//               </li>
//             ))}
//           </ul>

//           )}
//         </div> */}

//         <div className="flex justify-center items-start gap-8 mt-8">
//   {/* Pending Tasks */}
//   <div className="w-[330px] h-auto max-h-[400px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
//     <h2 className="text-2xl font-bold mb-2 text-center text-red-500">Pending Tasks 😢</h2>
//     <h2 className="text-[15px] mb-2 text-center text-black-300">
//       (Tasks Count : {incompleteTask.length})
//     </h2>
//     <ul className="space-y-2">
//       {incompleteTask.map(todo => (
//         <li key={todo.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
//           <label className="flex items-center gap-2 cursor-pointer w-full">
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggle(todo.id)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleToggle(todo.id);
//                 }
//               }}
//             />
//             <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
//               {todo.text}
//             </span>
//           </label>
//           <button 
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDelete(todo.id);
//           }}
//           className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 font-bold text-xl ml-2">X</button>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Completed Tasks */}
//   <div className="w-[330px] max-h-[400px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
//     <h2 className="text-2xl font-bold mb-2 text-center text-green-500">Completed Tasks 😊</h2>
//     <h2 className="text-[15px] mb-2 text-center text-black-300">
//       (Achievement Count : {completeTask.length})
//     </h2>
//     <ul className="space-y-2">
//       {completeTask.map(todo => (
//         <li key={todo.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
//           <label className="flex items-center gap-2 cursor-pointer w-full">
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggle(todo.id)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleToggle(todo.id);
//                 }
//               }}
//             />
            
//             <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
//               {todo.text}
//             </span>
//           </label>
//           <button 
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDelete(todo.id);
//           }}
//           className="text-red-500 px-2 pb-1 border-2 border-red-400 rounded-full hover:text-red-700 hover:bg-amber-600 font-bold text-xl ml-2">X</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>



//       </div>
//     </div>
//   );
// }

// export default App;

