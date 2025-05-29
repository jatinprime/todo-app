import { useTask } from "../Context(Store)/ContextStore";

const InputBar = () => {
  const { task, setTask, handleAdd } = useTask();

  const date = new Date();


    //free-code-camp
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate); // "17-6-2022"

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-2 font-light">(Date : {currentDate})</div>
        {/* <hr className="text-gray-400" /> */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-700">Todo App <span className="text-lg font-light">by Jatin Agrawal</span></h1>
      <div className="flex gap-4">
        <input
          type="text"
          autoFocus
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Enter a task..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputBar;
