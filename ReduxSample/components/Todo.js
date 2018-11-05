import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';

		// onClick = {onClick}
		// style={{ 
		// 	textDecoration: completed ? 'line-through' : 'none'
		// }}

const Todo = ({ onPress, completed, text }) => (
	/*
	<TouchableOpacity onPress={onPress} style={{marginLeft: 30}}>
		<Text style={{
			textDecorationLine: completed ? 'line-through' : 'none'
		}}> {text} </Text>
	</TouchableOpacity>
	*/
	<TouchableHighlight
		underlayColor='#e4f2d9'
		style={styles.row}
		onPress={onPress}
	>
		<View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
			<TouchableOpacity 
				style={completed ? styles.button : styles.button2} 
			/>
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableHighlight>
);

// Todo.propTypes = {
// 	onClick: PropTypes.func.isRequired,
// 	completed: PropTypes.bool.isRequired,
// 	text: PropTypes.string.isRequired
// }

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20
	},
	text: {
		flex: 1,
		fontSize: 16,
		marginLeft: 10
	},
	button: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#81c04d'
	},
	button2: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: 'gray'
	}
})

export default Todo