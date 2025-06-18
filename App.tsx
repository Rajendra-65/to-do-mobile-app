import { StyleSheet, View, Text } from "react-native";
import TodoInput from "./src/components/todoInput";

function App(): React.JSX.Element {
  return (
    <View style = {styles.container}>
      <Text style = {styles.headerText}>Todo App</Text>
      <TodoInput/>
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
    fontWeight : 'bold',
    marginBottom : 20,
    textAlign : 'center',
  },
})

export default App