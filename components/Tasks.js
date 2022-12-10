import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TaskContextProvider } from "../contexts/TaskContext";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <TaskContextProvider>
        <TaskInput />
        <TaskList />
      </TaskContextProvider>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
