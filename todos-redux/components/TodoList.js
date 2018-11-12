import React from 'react';
import { 
	View,
	Text
} from 'react-native'
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from '../containers/AddTodo'

const TodoList = ({ todos, onTodoClick }) => {
	return (
		<View style={{flex: 1}}>
			{
				todos.map((todo, index)=> {
					return (
						<Todo 
							key={index} {...todo} 
							onPress={()=>onTodoClick(index)} />
					)
				})
			}
			<AddTodo />
		</View>
	)
};

// TodoList.propTypes = {
// 	todos: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			completed: PropTypes.bool.isRequired,
// 			text: PropTypes.string.isRequired
// 		}).isRequired
// 	).isRequired,
// 	onTodoClick: PropTypes.func.isRequired
// }

export default TodoList;