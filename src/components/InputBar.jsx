import { useEffect, useState } from "react";
import { useTask } from "../Context(Store)/ContextStore";

const InputBar = () => {
  const { task, setTask, handleAdd, error, setError } = useTask();

  const date = new Date();

  //free-code-camp
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  // console.log(currentDate); // "17-6-2022"
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, []);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-1 font-light">(Date : {currentDate})</div>
      <div className="text-center text-xl mb-2 text-blue-400">
        {currentTime}
      </div>
      {/* <hr className="text-gray-400" /> */}
      <h1 className="text-4xl font-bold mb-1 text-center text-gray-700">
        Todo App
      </h1>
      <h1 className="text-lg text-center text-gray-500 mb-3 font-light">
        ~ by Jatin Agrawal
      </h1>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          autoFocus
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            if (e.target.value.trim() !== "") setError(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Enter a task..."
          className={`flex-grow min-w-0 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 ring-red-300"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        <button
          onClick={handleAdd}
          className="shrink-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputBar;
