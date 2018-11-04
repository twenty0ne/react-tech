import React from 'react'
import { View } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'



class Main extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</View>
		)
	}
}

export default Main;