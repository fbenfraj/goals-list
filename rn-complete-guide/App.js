import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "1", value: "One" },
    { id: "2", value: "Two" },
    { id: "3", value: "Three" },
    { id: "4", value: "Four" },
    { id: "5", value: "Five" },
    { id: "6", value: "Six" },
    { id: "7", value: "Seven" },
    { id: "8", value: "Eight" },
    { id: "9", value: "Nine" },
    { id: "10", value: "Ten" },
    { id: "11", value: "Eleven" }
  ]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    goalTitle != ""
      ? setCourseGoals(currentGoals => [
          ...currentGoals,
          { id: Math.random().toString(), value: goalTitle }
        ])
      : null;
      setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
