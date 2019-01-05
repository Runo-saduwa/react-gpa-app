import React, { Component } from 'react';
import { Consumer } from '../../Context';

class Result extends Component {
	deleteResult(dispatch, id) {
		dispatch({ type: 'DELETE_RESULT', payload: id });
	}

	render() {
		const { id, course, grade, unit } = this.props.result;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<React.Fragment>
							<tr>
								<td>{course}</td>
								<td>{grade}</td>
								<td>{unit}</td>
								<td>
									<i
										onClick={this.deleteResult.bind(this, dispatch, id)}
										className="fas fa-times"
										style={{ color: 'red', fontSize: '1.5rem' }}
									/>
								</td>
							</tr>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Result;
