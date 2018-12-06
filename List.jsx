import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import "./List.css";
/*
The list component will take the list of items passed in as a property
and create an HTML list with those item. In this example, we are passing in the
filtered produce list, but this component can be used for other types of items
as long as it has a name.
*/
class List extends Component {
	renderList() {
		/*
		Javascript map will let you iterate and modify each item in a list.
		In this example, we are changing each item
		(ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
		*/

		const items = this.props.items.map(item => {			

			return (
    			<ListGroupItem>

    				<div className = "List-Item">
    					<img src = {item.img}/>
      					<h2>{item.name}</h2>
      					<h3>${item.cost}</h3>
    				</div>


    				<div className = "Tags">
    					<h4>{item.type} -</h4>
    					<span>&nbsp;</span>
    					<h4>{item.choice}</h4>
    				</div>

    			</ListGroupItem>
  			);
		});

		return items;
	}

	render() {
		return (
			<ListGroup>
				{this.renderList()}
			</ListGroup>
		);
	}
}

export default List;