import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentList = ({ students }) => {
  return (
    <View style={styles.container}>
      {students.map((student, index) => (
        <View key={index} style={styles.studentItem}>
          <Text>{student.name}</Text>
          <Text>{student.grade}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default StudentList;
