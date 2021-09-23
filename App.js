import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  

  // store course goals as an array
  const [courseGoals, setCourseGoals] = useState([]);

  // manage modal
  const [isAddMode, setIsAddMode] = useState(false);

  

  const addGoalHandler = goalTitle => {
    // spreads courseGoals into new array with new entered goal
    // each object has a key and value property -> necessary for FlatList
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { id: Math.random().toString(), value: goalTitle }]);

      // close the Modal after adding a new goal
      setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  // close Modal state upon cancel
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
