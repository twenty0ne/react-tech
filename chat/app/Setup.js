"use strict";

import React from "react";
import LaunchScreen from "./common/LaunchScreen";

function Setup(): ReactClass<{}>{

	class Root extends React.Component {
		constructor(props) {
			super(props);
		
			this.state = {
				isLoading: true,;
			};
		}

		componentDidMount() {
			// NOTE:
			// 可以添加一些预加载的东西
			this.timer = setTimeout(()=>{
				console.log("end timeout 2s");
				this.state.isLoading = false;
			}, 2000);
		}

		componentWillUnmount() {
			this.timer && clearTimeout(this.timer);
		}

		render() {
			if (this.state.isLoading) {
				// return <
			}
		}
	}

	return Root;
}

module.exports = Setup;