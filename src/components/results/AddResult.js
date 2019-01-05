import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';

class AddResult extends Component {
	state = {
		course: '',
		grade: '',
		unit: '',
		errMessage: false
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		const { course, grade, unit, errMessage } = this.state;
		//check if fields are empty
		if (course === '' || grade === '' || (unit === '' || unit === 0)) {
			this.setState({
				errMessage: !errMessage
			});
			setTimeout(() => {
				this.setState({
					errMessage: false
				});
			}, 3000);
		} else {
			if (grade === 'A') {
				const gradeVal = 5 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'B') {
				const gradeVal = 4 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'C') {
				const gradeVal = 3 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'D') {
				const gradeVal = 2 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'F') {
				const gradeVal = 0 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else {
				this.setState({
					errMessage: !errMessage
				});
				setTimeout(() => {
					this.setState({
						errMessage: false
					});
				}, 3000);
			}
		}
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value.trim().toUpperCase()
		});
	};
	render() {
		const { course, grade, unit, errMessage } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="container mt-5">
							<h1>Add Course</h1>
							<div className="card card-body mb-5">
								{errMessage ? (
									<div className="alert alert-danger">
										<strong>
											Woah!!, Please check that all input fields are correctly filled.
										</strong>
									</div>
								) : null}
								<div className="card-content">
									<form onSubmit={this.onSubmit.bind(this, dispatch)}>
										<div className="form-group">
											<label htmlFor="course">Course Title:</label>
											<input
												type="text"
												className="form-control"
												name="course"
												value={course}
												onChange={this.onChange}
												placeholder="PNG411, PETROLEUM PRACTICAL"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="course">Course Unit:</label>
											<input
												type="number"
												className="form-control"
												name="unit"
												value={unit}
												onChange={this.onChange}
												placeholder="Course Unit E.g 3"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="course">Course Grade:</label>
											<input
												type="text"
												className="form-control"
												name="grade"
												value={grade}
												onChange={this.onChange}
												placeholder="A, B, C..."
											/>
										</div>
										<input type="submit" className="btn btn-success btn-lg btn-block" />
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddResult;
