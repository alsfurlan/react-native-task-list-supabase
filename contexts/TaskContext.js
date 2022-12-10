import { createContext, useState } from "react";

export const TaskContext = createContext({
  taskList: [],
  addTask: (task) => {},
  updateTask: (task) => {},
});

export const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  const addTask = (description) => {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      {
        id: Date.now(),
        description,
        done: false,
      },
    ]);
  };

  const updateTask = (task) => {
    setTaskList((currentTaskList) => {
      const index = currentTaskList.findIndex((t) => t.id === task.id);
      currentTaskList[index] = task;
      return [...currentTaskList];
    });
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
