import React from 'react'
import { 
  View, 
  Button, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        onChangeText={text=>{
          input=text
        }}
        onSubmitEditing={()=>{
          dispatch(addTodo(input))
        }}
      >
      </TextInput>
    </View>
    /*
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          onChangeText={text=>{
            input=text
          }}
        />
      </View>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{
          dispatch(addTodo(input))
        }}
      >
        <Text style={styles.search}>
          Add Todo
        </Text>
      </TouchableOpacity>
    </View>
    */
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 10,
    },
    input: {
        height: 40,
        flex: 1
    }
});

AddTodo = connect()(AddTodo)

export default AddTodo
