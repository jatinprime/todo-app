import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }

  const handleAdd = () => {
    if (task.trim() === "") {
      // alert("Empty task can't be Added !!");
      setError(true);
      return;
    }
    setTodos([...todos, { text: task, id: Date.now(), completed: false }]);
    setTask("");
    setError(false);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        todos,
        handleAdd,
        handleToggle,
        handleDelete,
        error,
        setError,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
