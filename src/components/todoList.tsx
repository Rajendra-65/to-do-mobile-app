import React from "react";
import {ScrollView, StyleSheet } from "react-native";
import { Todo } from "../types";
import TodoItem from "./todoItem";

interface TodoListProps {
    todoList : Todo[];
    onDeleteTodo : (id:string) => void;
    onToggleTodo : (id:string) => void;
}

const TodoList:React.FC<TodoListProps>= ({todoList,onDeleteTodo,onToggleTodo}) => {
    return(
        <ScrollView style = {styles.container}>
            {
                todoList.map(todo=> 
                    <TodoItem 
                        key = {todo.id}
                        onDelete = {()=>onDeleteTodo(todo?.id)}
                        onToggle = {()=>onToggleTodo(todo?.id)}
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