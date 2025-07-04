import React from "react";
import {ScrollView, StyleSheet } from "react-native";
import { Todo } from "../types";
import TodoItem from "./todoItem";

interface TodoListProps {
    todoList : Todo[];
    onDeleteTodo : (id:string) => void;
    onToggleTodo : (id:string) => void;
    onEditTodo : (id:string,newText:string) => void;
    disableEdit : boolean ;
}

const TodoList:React.FC<TodoListProps>= ({todoList,onDeleteTodo,onToggleTodo,onEditTodo,disableEdit}) => {
    return(
        <ScrollView style = {styles.container}>
            {
                todoList.map(todo=> 
                    <TodoItem 
                        key = {todo.id}
                        onDelete = {()=>onDeleteTodo(todo?.id)}
                        onToggle = {()=>onToggleTodo(todo?.id)}
                        onEdit = {newText => onEditTodo(todo?.id , newText)}
                        todo = {todo}
                        disableEdit = {disableEdit}
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