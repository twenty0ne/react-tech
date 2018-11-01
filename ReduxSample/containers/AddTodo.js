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

      // <form
      //   onSubmit={e => {
      //     e.preventDefault()
      //     if (!input.value.trim()) {
      //       return
      //     }
      //     dispatch(addTodo(input.value))
      //     input.value = ''
      //   }}
      // >
      //   <input
      //     ref={node => {
      //       input = node
      //     }}
      //   />
      //   <button type="submit">
      //     Add Todo
      //   </button>
      // </form>

let AddTodo = ({ dispatch }) => {
  let input

  return (
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
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
        height: 44,
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingLeft: 5
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23beff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44
    }
});

AddTodo = connect()(AddTodo)

export default AddTodo
