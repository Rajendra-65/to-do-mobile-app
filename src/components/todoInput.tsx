import React from "react";
import { View,StyleSheet,TextInput } from "react-native";

const TodoInput : React.FC = () => {
    return(
        <View style = {styles.container}>
            <TextInput 
                style = {styles.input}
                placeholder = "Add a new Todo"
            />
        </View>
    )
}

const styles  = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginBottom : 20
    },
    input :{
        flex:1,
        borderWidth : 1,
        borderColor : '#cccccc',
        paddingHorizontal : 10,
        paddingVertical : 5,
        marginRight : 10
    },
})

export default TodoInput;