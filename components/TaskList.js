import { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TaskContext } from "../contexts/TaskContext";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskContext = useContext(TaskContext);

  const onFinishHandler = (task) => {
    task.done = !task.done;
    taskContext.updateTask(task);
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
