import axios from "axios";
import { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { TaskContext } from "../contexts/TaskContext";
import { findAllTasks, updateTask } from "../services/TaskApi";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskContext = useContext(TaskContext);

  useEffect(() => {
    // findAllTasks()
    //   .then((response) => {
    //     taskContext.setTasks(response.data);
    //   })
    //   .catch(() => {});

    const findAll = async () => {
      try {
        const response = await findAllTasks();
        taskContext.setTasks(response.data);
      } catch (e) {
        Alert.alert("Erro", "Erro ao carregar lista de tarefas");
      }
    };
    findAll();
  }, []);

  const onFinishHandler = async (task) => {
    task.done = !task.done;

    // updateTask(task)
    //   .then(() => {
    //     taskContext.updateTask(task);
    //   })
    //   .catch(() => {
    //     Alert.alert("Erro", "Erro ao alterar status da tarefa");
    //   });

    try {
      await updateTask(task);
      taskContext.updateTask(task);
    } catch (e) {
      Alert.alert("Erro", "Erro ao alterar status da tarefa");
    }
  };

  return (
    <View style={styles.taskList}>
      <ScrollView>
        {taskContext.taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onPress={() => onFinishHandler(task)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskList: {
    flex: 6,
    backgroundColor: "lightyellow",
    paddingTop: 8,
  },
});
