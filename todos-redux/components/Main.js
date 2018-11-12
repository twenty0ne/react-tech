import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<VisibleTodoList />
				<Footer />
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