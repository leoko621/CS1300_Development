import React, { Component } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);

		// The state is just a list of key/value pair (like a hashmap)
		this.state = {
			search: "",
			type: "",
			choice: "",
			sort: ""
		};
		this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
	}

	// Sets the state whenever the user types on the search bar
	onSearch = (event) => {
		this.setState({search: event.target.value.toLowerCase()});
	}

	filterItem = (item) => {
		console.log(this.state.type);
		console.log(this.state.choice);

		// Checks type
		if (item.type.toLowerCase().search(this.state.type) !== -1) {

			// Checks choice
			if (item.choice.toLowerCase().search(this.state.choice) !== -1) {
				return item.name.toLowerCase().search(this.state.search) !== -1;
			}	
		}
	}

	// Set Filters 
	onTypeFilter = (event) => {
		this.setState({type: event});
	}
	onChoiceFilter = (event) => {
		this.setState({choice: event});
	}

	// Sort 
	sortByPriceAsc() {
        this.setState(prevState => {
			this.props.items.sort((a, b) => (a.cost - b.cost))
      	});
      	this.setState({sort: ""});
	}
	sortByPriceDesc() {
        this.setState(prevState => {
          	this.props.items.sort((a, b) => (b.cost - a.cost))
		});
		this.setState({sort: ""});
	}

	render() {
		return (

			<div className = "filter-list">

				<h1>Jos Prices</h1>

				<DropdownButton id= "typeDropdown" title={"Type"} >
					<MenuItem eventKey="" onSelect={this.onTypeFilter}>All</MenuItem>
					<MenuItem eventKey="drink" onSelect={this.onTypeFilter}>Drinks</MenuItem>
					<MenuItem eventKey="snack" onSelect={this.onTypeFilter}>Snacks</MenuItem>
    			</DropdownButton>
    			<span>&nbsp;</span>

    			<DropdownButton id= "typeDropdown" title={"Categories"}>
					<MenuItem eventKey="" onSelect={this.onChoiceFilter}>All</MenuItem>
					<MenuItem eventKey="chip" onSelect={this.onChoiceFilter}>Chips</MenuItem>
					<MenuItem eventKey="dairy" onSelect={this.onChoiceFilter}>Dairy</MenuItem>
					<MenuItem eventKey="produce" onSelect={this.onChoiceFilter}>Produce</MenuItem>
					<MenuItem eventKey="sweet" onSelect={this.onChoiceFilter}>Sweets</MenuItem>
    			</DropdownButton>
    			<span>&nbsp;</span>

				<input type="text" placeholder="Search" onChange={this.onSearch} />
				<span>&nbsp;</span>

				<DropdownButton id= "typeDropdown" title={"Sort"}>
					<MenuItem eventKey="l2h" onSelect={this.sortByPriceAsc}>Price: Low to High</MenuItem>
					<MenuItem eventKey="h2l" onSelect={this.sortByPriceDesc}>Price: High to Low</MenuItem>
    			</DropdownButton>

				<List items={this.props.items.filter(this.filterItem)} />

			</div>
		);
	}
}

export default FilteredList;