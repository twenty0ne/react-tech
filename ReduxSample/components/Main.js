import React from 'react'
import { View, StyleSheet } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'



class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AddTodo />
				<VisibleTodoList />
				<Footer stype={{flex: 1}} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})

export default Main;