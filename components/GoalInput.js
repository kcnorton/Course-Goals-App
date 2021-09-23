import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    // default state is an empty string, update enteredGoal w setEnteredGoal
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    // this function adds goal and then clears the input text
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        // setEnteredGoal('');
        clearInputText();
    };

    const clearInputText = () => {
        setEnteredGoal('');
    };

    // handler to call cancel and clear text from input box
    const cancelAndClear = () => {
        props.onCancel();
        clearInputText();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandler} 
                value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonCancel} >
                        <Button title="ADD" color="white" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.buttonAdd} >
                        <Button title="CANCEL" color="white" onPress={cancelAndClear} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, // takes as much space as its parent element -> Modal
        justifyContent: 'center', 
        alignItems: 'center'
      },

      input: {
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%',
        marginBottom: 10
      },

      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%'
      },

      buttonCancel: {
          width: '40%',
          backgroundColor: 'red'      
      },

      buttonAdd: {
          width: '40%',
          backgroundColor: 'blue'
      }
});

export default GoalInput;
