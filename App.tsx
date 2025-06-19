import { StyleSheet, View, Text } from "react-native";
import TodoInput from "./src/components/todoInput";
import { useState } from "react";
import TodoList from "./src/components/todoList";

interface Todo {
  id: string,
  text: string,
  completed: boolean,
}

function App(): React.JSX.Element {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([...todoList, {
      id: Date.now().toString(),
      text: text,
      completed: false
    }])
  }

  const deleteToDo = (id: string) => {
    console.log(id);
    setTodoList(
      todoList.filter(item => item.id !== id)
    )
  }

  const togleTodo = (id: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id ? {
          ...item,
          completed: !item.completed
        }
        :
          item
      )
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList onToggleTodo={togleTodo} onDeleteTodo={deleteToDo} todoList={todoList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default App