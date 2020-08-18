import React from "react";
import axios from "axios";

class Converter extends React.Component {
	constructor() {
		super();
		this.state = {
			rates: [],
			currency: "",
			convertedCurrency: "",
		};
	}

	handleChanges = (e) => {
		this.setState({
			...this.state.currency,
			[e.target.name]: e.target.value,
		});
	};

	componentDidMount() {
		axios
			.get(
				"http://data.fixer.io/api/latest?access_key=5042badc6b6cc7f6a717ad4cfa088592&format=1"
			)
			.then((res) => {
				this.setState({ rates: res.data.rates });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		// const where = this.money.map((ya) => {
		//     console.log(money.indexOf(ya));
		//     // return indexOf(ya)
		// })
		// return where
	};

	where() {
		const money = Object.keys(this.state.rates);

		return (
			<select>
				<option>SELECT</option>
				{money.map((ya) => {
					return <option> {ya} </option>;
				})}
			</select>
		);
	}

	render() {
		// console.log(this.state.rates[Object.keys(this.state.rates)[0]]);
		// console.log(this.state.rates[Object.keys(this.state.rates)[4]]);
		// console.log(Object.values(this.state.rates))
		// const money = Object.keys(this.state.rates);
		return (
			<div>
				<div>{this.where()}</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input
							onChange={this.handleChanges}
							// value={this.state.currency}
						/>
					</form>
					<button onClick={this.handleSubmit}>
						W:EOFJOWPEIFJWOPEIJFWf
					</button>
				</div>
			</div>
		);
	}
}

export default Converter;
