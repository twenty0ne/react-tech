import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

		// onClick = {onClick}
		// style={{ 
		// 	textDecoration: completed ? 'line-through' : 'none'
		// }}

const Todo = ({ onPress, completed, text }) => (
	<TouchableOpacity onPress={onPress} style={{marginLeft: 30}}>
		<Text style={{
			textDecorationLine: completed ? 'line-through' : 'none'
		}}> {text} </Text>
	</TouchableOpacity>
);

// Todo.propTypes = {
// 	onClick: PropTypes.func.isRequired,
// 	completed: PropTypes.bool.isRequired,
// 	text: PropTypes.string.isRequired
// }

export default Todo