import React from "react";
import axios from "axios";

class Converter extends React.Component {
	constructor() {
		super();
		this.state = {
            rates: [],
            currency: 0,
            convertedCurrency: 0
		};
    }
    
    handleChanges = (e) => {
        this.setState({
            ...this.state.convertedCurrency,
            [e.target.name]: e.target.value,
        });
    };
    
    componentDidMount() {
        axios.get("http://data.fixer.io/api/latest?access_key=5042badc6b6cc7f6a717ad4cfa088592&format=1")
        .then(res => {
            this.setState({ rates: res.data.rates })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        // console.log(this.state.rates[Object.keys(this.state.rates)[0]]);
        // console.log(this.state.rates[Object.keys(this.state.rates)[4]]);
        // console.log(Object.values(this.state.rates))
        const money = Object.keys(this.state.rates);
        return (
            <div>
                <select>
                    {money.map((ya) => {
                        return (
                            <option> {ya} </option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Converter;
