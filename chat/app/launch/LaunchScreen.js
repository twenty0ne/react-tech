"use strict";

import React from "react";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
	WIN_HEIGHT = Dimensions.get("window").height;

class LaunchSceen extends React.Component {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Image
					source={require("../images/launchscreen.png")}
					style={styles.image}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(251, 249, 240, 1)",
	},
	image: {
		position: "absolute",
		left: 0,
		top: 0,
		width: WIN_WIDTH,
		height: WIN_HEIGHT,
		resizeMode: "cover"
	}
});

module.exports = LaunchSceen;
