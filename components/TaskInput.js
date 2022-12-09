import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const onAddHandler = () => {
    onAddTask(task);
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
