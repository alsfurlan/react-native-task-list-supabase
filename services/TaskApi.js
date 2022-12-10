import axios from "axios";

const apiUrl = "http://10.0.2.2:3000/tasks";

export const findAllTasks = async () => {
  return await axios.get(apiUrl);
};

export const addNewTask = async (task) => {
  return await axios.post(apiUrl, task);
};

export const updateTask = async (task) => {
  return await axios.put(`${apiUrl}/${task.id}`, task);
};
