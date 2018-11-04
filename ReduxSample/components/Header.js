import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Header = ()=> (
	<View style={styles.bar}>
		<Text style={styles.button}></Text>
		<Text style={styles.title}>Todos</Text>
		<TouchableOpacity style={styles.button}>
			<Text style={styles.text}>Add</Text>
		</TouchableOpacity>
	</View>
)

const styles = StyleSheet.create({
	bar: {
		backgroundColor: '#81c04d',
		paddingTop: 30,
		paddingBottom: 10,
		flexDirection: 'row'
	},
	button: {
		width: 50
	},
	text: {
		color: '#fff',
		textAlign: 'center'
	},
	title: {
		flex: 1,
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold'
	}
})

export default Header
