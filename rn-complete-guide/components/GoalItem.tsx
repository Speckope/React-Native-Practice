import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface GoalItemProps {
  title: string;
  onDelete: (goalId: string) => void;
  uid: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, onDelete, uid }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onDelete(uid)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});

export default GoalItem;
