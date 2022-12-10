import { View, TextInput, Button, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { addNewTask } from "../services/TaskApi";

const TaskInput = () => {
  const taskContext = useContext(TaskContext);

  const [description, setDescription] = useState("");

  const onAddHandler = async () => {
    const newTask = {
      description: description,
      done: false,
    };
    try {
      // const response = await addNewTask(newTask);
      // const newTaskCreated = response.data;
      const { data: newTaskCreated } = await addNewTask(newTask);
      taskContext.addTask(newTaskCreated);
      setDescription("");
    } catch (e) {
      Alert.alert("Erro", "Erro ao salvar nova tarefa");
    }
  };

  return (
    <View style={styles.taskInput}>
      <TextInput
        style={styles.taskTextInput}
        placeholder="Digite sua tarefa aqui"
        value={description}
        onChangeText={(text) => setDescription(text)}
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
