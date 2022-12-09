import { View, ScrollView, StyleSheet } from "react-native";

import TaskItem from "./TaskItem";

const TaskList = ({ taskList, onFinishTask }) => {
  return (
    <View style={styles.taskList}>
      <ScrollView>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onPress={() => onFinishTask(task.id)}
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
