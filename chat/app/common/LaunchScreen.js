"use strict";

import React from "react";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
	WIN_HEIGHT = Dimensions.get("window").height;

class LaunchSceen extends React.Component {
	render() {
		return (
			<View>
				<Text>Hello world!</Text>
			</View>
		);
	}
}

module.exports = LaunchSceen;