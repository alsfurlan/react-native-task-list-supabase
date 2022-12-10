import supabase from "../config/SupabaseClient";

export const findAllTasks = async () => {
  return await supabase.from("tasks").select("*");
};

export const addNewTask = async (task) => {
  return await supabase.from("tasks").insert([task]).select();
};

export const updateTask = async (task) => {
  return await supabase.from("tasks").update(task).eq("id", task.id).select();
};
