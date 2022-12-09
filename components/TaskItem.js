import { Pressable, View, Text, StyleSheet } from "react-native";

const TaskItem = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.taskListItem(props.task.done)}>
        <Text style={styles.taskListItemText(props.task.done)}>
          {props.task.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
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
