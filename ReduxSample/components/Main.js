import React from 'react'
import { View } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Main extends React.Component {
	render() {
		/*
		<View>
			<AddTodo />
				<VisibleTodoList />
			<Footer />
		</View>
		*/
		return (
			<View>
				<AddTodo />
			</View>
		)
	}
}

export default Main;