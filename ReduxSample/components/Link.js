import React from 'react';
// import PropTypes from 'prop-types';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native'

const Link = ({active, children, onClick})=> {
	// if (active) {
	// 	return <Text>{children}</Text>
	// }

	return (
		<TouchableOpacity
			stype={styles.button} 
			onPress={()=>{
				onClick()
			}}
		>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
};

// Link.propTypes = {
// 	active: PropTypes.bool.isRequired,
// 	children: PropTypes.node.isRequired,
// 	onClick: PropTypes.func.isRequired
// }

const styles = StyleSheet.create({
	button: {
		flex: 1
	},
	text: {
		color: '#ff0000',
		textAlign: 'center',
		fontWeight: 'bold'
	}
})

export default Link;