import styles from "./styles";
import { Button, Text, TextInput, View } from 'react-native';
import { useState } from "react";

function Header({onAddTodo}) {
  const [todoInput, setTodoInput] = useState("");
  function onTextInputChange(text) {
    setTodoInput(text);
  }
  function onButtonPress() {
    onAddTodo("Hello world")
  }
  return (
    <View style={styles.headerContainer}>
      <TextInput 
        style={styles.input}
        placeholder="Add todo"
        onChangeText={onTextInputChange}
        value={todoInput}
      />
      <Button
        title="Add todo"
        onPress={onButtonPress}
      />
    </View>
  )
}

export default Header