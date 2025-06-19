import { View, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native'
import React from 'react';
import { Todo } from '../types';
import { useState } from 'react';

interface TodoEditProps {
    todo : Todo;
    onSave : (newText : string) => void;
    onCancel : () => void
}

const TodoEdit : React.FC<TodoEditProps> = ({todo,onSave,onCancel}) => {

    const [text,setText] = useState(todo?.text);

    const handleSave = () => {
        if(text.trim()){
            onSave(text.trim())
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value = {text}
                onChangeText = {setText}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress = {handleSave} style={styles.saveBtn}>
                    <Text style={styles.btnText}>
                       Save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {onCancel} style = {styles.cancelBtn}>
                    <Text style={styles.btnText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc'
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginRight: 10
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    btnText :{
        color : '#fff',
        fontSize : 15
    },
    saveBtn : {
        backgroundColor : '#4cd9c4',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5,
        marginRight : 5
    },
    cancelBtn : {
        backgroundColor : '#ff9500',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5,
        marginRight : 5
    },
})

export default TodoEdit;