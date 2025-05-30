import InputBar from "./components/InputBar";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./Context(Store)/ContextStore";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 flex justify-center pt-10 px-4">
        <div className="w-full max-w-[700px]">
          <InputBar />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
