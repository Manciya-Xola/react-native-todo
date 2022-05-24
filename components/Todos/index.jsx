import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from "./styles";

function Todos({todos}) {
  
  return (
    <View style={styles.todosContainer}>
      {todos.map((current)=>{
        <Text>
          {current}
        </Text>
      })}
    </View>
  )
}

export default Todos