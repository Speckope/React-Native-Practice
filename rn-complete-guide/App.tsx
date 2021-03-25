import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { uid: string; value: string }[]
  >([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { uid: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler: (goalId: string) => void = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.uid !== goalId));
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='ADD' onPress={() => setIsAddMode(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelAddGoalHandler}
      />
      {/* Use Flat list for long lists. It's more performant.  */}
      <FlatList
        // Default is item.key. We write it to specify where our key is.
        // Flatlist expect specific data shape with key in it. We use extractor to use diferent key name.
        keyExtractor={(item, index) => item.uid}
        // Data we will render
        data={courseGoals}
        // Our render function.
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            uid={itemData.item.uid}
          />
        )}
      />
    </View>
  );
}

// Stylesheets are more performant and readable than inline styles.
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});
