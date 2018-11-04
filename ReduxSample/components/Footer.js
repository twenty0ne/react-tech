import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FilterLink from '../containers/FilterLink'

/*
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
		*/

const Footer = ()=> (
	<View style={styles.bar}>
		<Text style={{flex:1}}>All</Text>
		<Text style={{flex:1}}>All2</Text>
		<Text style={{flex:1}}>All3</Text>
	</View>
)

const styles = StyleSheet.create({
	bar: {
		backgroundColor: '#81c04d',
		flexDirection: 'row'
	}
})

export default Footer
