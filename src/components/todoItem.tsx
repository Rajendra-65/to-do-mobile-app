import React from "react";
import { View, StyleSheet } from "react-native";
import { Todo } from "../types";

interface TodoItemProps {
    todo : Todo
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) => {
    console.log("Todo from todo Item",todo)
    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default TodoItem;