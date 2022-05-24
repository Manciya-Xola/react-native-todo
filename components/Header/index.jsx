import styles from "./styles";
import { Button, Text, TextInput, View } from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <TextInput 
        style={styles.input}
        placeholder="Add todo"
      />
      <Button
        title="Add todo"
      />
    </View>
  )
}

export default Header