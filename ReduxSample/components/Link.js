import React from 'react';
// import PropTypes from 'prop-types';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native'

/*

		*/

const Link = ({active, children, onClick})=> {
	// if (active) {
	// 	<Text style={styles.text}>{children}</Text>
	// }
	var touchStyle = [styles.button];
	if (active) {
		touchStyle.push(styles.active);
	}

	return (
		<TouchableOpacity style={touchStyle} onPress={()=>{onClick()}}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
}

// Link.propTypes = {
// 	active: PropTypes.bool.isRequired,
// 	children: PropTypes.node.isRequired,
// 	onClick: PropTypes.func.isRequired
// }

const styles = StyleSheet.create({
	button: {
		flex: 1,
		paddingTop: 20,
		paddingBottom: 20
	},
	text: {
		color: '#fff000',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	active: {
		backgroundColor: '#70a743'
	}
})

export default Link;