import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      {
        id: Date.now(),
        description: task,
        done: false,
      },
    ]);
    setTask("");
  };

  const finishTask = (id) => {
    setTaskList((currentTaskList) => {
      const index = currentTaskList.findIndex((task) => task.id === id);
      currentTaskList[index].done = !currentTaskList[index].done;
      return [...currentTaskList];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskInput}>
        <TextInput
          style={styles.taskTextInput}
          placeholder="Digite sua tarefa aqui"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <View style={styles.taskList}>
        <ScrollView>
          {taskList.map(({ id, description, done }) => {
            return (
              <Pressable key={id} onPress={() => finishTask(id)}>
                <View style={styles.taskListItem(done)}>
                  <Text style={styles.taskListItemText(done)}>
                    {description}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  taskList: {
    flex: 6,
    backgroundColor: "lightyellow",
    paddingTop: 8,
  },
  taskListItem: (done) => {
    return {
      padding: 16,
      border: 1,
      backgroundColor: done ? "lightgreen" : "indianred",
      borderRadius: 16,
      margin: 8,
    };
  },
  taskListItemText: (done) => {
    return {
      fontSize: 24,
      textDecorationLine: done ? "line-through" : "none",
    };
  },
});
