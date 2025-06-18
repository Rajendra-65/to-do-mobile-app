import React from "react";
import {ScrollView, StyleSheet } from "react-native";
import { Todo } from "../types";
import TodoItem from "./todoItem";

interface TodoListProps {
    todoList : Todo[]
}

const TodoList:React.FC<TodoListProps>= ({todoList}) => {
    return(
        <ScrollView>
            {
                todoList.map(todo=> 
                    <TodoItem 
                        key = {todo.id}
                        todo = {todo}
                    />
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,

    }
})

export default TodoList;