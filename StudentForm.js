import React, { useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StudentForm = ({ onAddStudent }) => {
  const nameRef = useRef(null);
  const gradeRef = useRef(null);

  const handleAddStudent = () => {
    const name = nameRef.current.value;
    const grade = gradeRef.current.value;

    if (name && grade) {
      onAddStudent({ name, grade });
      nameRef.current.value = '';
      gradeRef.current.value = '';
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput ref={nameRef} style={styles.input} />
      <Text>Grade:</Text>
      <TextInput ref={gradeRef} style={styles.input} />
      <Button title="Add Student" onPress={handleAddStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default StudentForm;
