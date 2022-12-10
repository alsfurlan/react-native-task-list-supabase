import { View, TextInput, Button, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskInput = () => {
  const taskContext = useContext(TaskContext);

  const [task, setTask] = useState("");

  const onAddHandler = () => {
    taskContext.addTask(task);
    setTask("");
  };

  return (
    <View style={styles.taskInput}>
      <TextInput
        style={styles.taskTextInput}
        placeholder="Digite sua tarefa aqui"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Adicionar" onPress={onAddHandler} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  taskInput: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    paddingTop: 16,
  },
  taskTextInput: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 16,
    padding: 16,
    fontSize: 24,
    width: "70%",
    marginRight: 8,
  },
});
