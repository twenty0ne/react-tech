import React from 'react';
// import PropTypes from 'prop-types';
import {
	TouchableOpacity,
	Text
} from 'react-native'

const Link = ({active, children, onClick})=> {
	if (active) {
		return <Text>{children}</Text>
	}

	return (
		<TouchableOpacity
			href="" 
			onPress={()=>{
				onClick()
			}}
		>
			<Text>{children}</Text>
		</TouchableOpacity>
	)
};

// Link.propTypes = {
// 	active: PropTypes.bool.isRequired,
// 	children: PropTypes.node.isRequired,
// 	onClick: PropTypes.func.isRequired
// }

export default Link;