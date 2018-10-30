import React from 'react'
import { View, Button } from 'react-native'
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

  onAddTodo = () => {
    console.log("onAddTodo")
  }

  return (
    <View>
      <Button
        onPress={this.onAddTodo}
        title="Add Todo"
      />
    </View>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
