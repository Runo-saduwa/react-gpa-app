import React, { Component } from 'react';

export default class Spinner extends Component {
	render() {
		return (
			<div  style={styles}>
				<div>
          <img className="mx-auto" src="/img/spinner.gif" alt="loading...." />
				</div>
			</div>
		);
	}
}


const styles = {
    width: "100vw",
    overflow: "hidden",
}