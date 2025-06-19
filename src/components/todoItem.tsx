import React from "react";
import { View, StyleSheet,TouchableOpacity,Text } from "react-native";
import { Todo } from "../types";

interface TodoItemProps {
    todo : Todo,
    onDelete : () => void,
    onToggle : () => void
}

const TodoItem:React.FC<TodoItemProps> = ({todo,onDelete,onToggle}) => {

    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress = {onToggle} style = {styles.todoText}>
                <Text style = {[styles.text , todo?.completed && styles.completedText]}>{todo.text}</Text>
            </TouchableOpacity>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.btnText && styles.editBtn}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {onDelete}>
                   <Text style = {styles.btnText && styles.DeleteBtn}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#cccccc'
    },
    todoText : {
        flex : 1
    },
    text : {
        fontSize : 18
    },
    completedText : {
        textDecorationLine : 'line-through',
        color : '#888888',
    },
    buttonContainer : {
        flexDirection : 'row',
    },
    editBtn : {
        backgroundColor : '#007aff',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5,
        marginRight : 5
    },
    DeleteBtn : {
        backgroundColor : '#ff3b30',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5,
        marginRight : 5
    },
    btnText :{
        color : '#fff',
        fontSize : 15
    }
})

export default TodoItem;