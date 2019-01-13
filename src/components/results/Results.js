import React, { Component } from 'react';
import Result from './Result';
import { Consumer } from '../../Context';
class Results extends Component {

	CalcGp = (results, dispatch) => {
		const totalUnits = results.map((result) => parseInt(result.unit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		let gpa = (totalGradeVal / totalUnits).toFixed(2);
		dispatch({ type: 'GPA', payload: gpa });
		this.props.history.push('/spinner');
		setTimeout(() => {
			this.props.history.push('/results/gp');
		}, 3000);
	};

	AddNewResult = (results, dispatch) => {
		const totalUnits = results.map((result) => parseInt(result.unit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		const cumulative_data = {
			totalUnits: totalUnits,
			totalGradeVal: totalGradeVal
		}
        console.log(cumulative_data);
		dispatch({type: 'CUMULATIVE_DATA', payload: cumulative_data});
		this.DeleteGp(dispatch);
		this.props.history.push('/addresults');
	}

	calc_cgpa = (results, dispatch) => {
		const totalUnits = results.map((result) => parseInt(result.unit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		const cumulative_data = {
			totalUnits: totalUnits,
			totalGradeVal: totalGradeVal
		}
		console.log(cumulative_data);
		dispatch({type: 'CUMULATIVE_DATA', payload: cumulative_data});

		//Semester details 
     	this.props.history.push('results/semesterDetails');
	}
	DeleteGp = (dispatch) => {
		const newResult = [];
		dispatch({ type: 'DELETE_GP', payload: newResult });

	};

	ContinueCalc = () => {
		this.props.history.push('/addresults');
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { results, dispatch } = value;
					return (
						<React.Fragment>
							<div className="container mt-5">
								<h1 className="text-center mb-3">Semester Result</h1>
								<table className="table table-dark">
									<thead>
										<tr>
											{/* <th>#</th> */}
											<th>Course</th>
											<th>Grade</th>
											<th>Unit</th>
										</tr>
									</thead>
									<tbody>{results.map((result) => <Result key={result.id} result={result} />)}</tbody>
								</table>
								{results.length !== 0 ? (
									<div className="text-center mb-5">
										<button
											onClick={this.ContinueCalc.bind(this)}
											className="btn mx-2 mt-2 btn-outline-dark"
										>
											Add More Courses?
										</button>
										<button
											onClick={this.AddNewResult.bind(this, results, dispatch)}
											className="btn text-capitalize mt-2 btn-outline-dark"
										>
											add new semester result
										</button>
										<button
											onClick={this.CalcGp.bind(this, results, dispatch)}
											className="btn mx-2 mt-2 btn-outline-dark"
										>
											Calculate GPA
										</button>
										<button
											onClick={this.calc_cgpa.bind(this, results, dispatch)}
											className="btn mt-2 mx-2 btn-outline-dark"
										>
											Calculate CGPA
										</button>
										<button
											onClick={this.DeleteGp.bind(this, dispatch)}
											className="btn mt-2 btn-outline-danger"
										>
											Delete Result
										</button>
									</div>
								) : null}
							</div>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Results;
