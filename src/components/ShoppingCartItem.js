import React from 'react';

const Item = props => {
	// debugger
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props.id)}>Remove from cart</button> {/**Added onClick for Stretch */}
			</div>
		</div>
	);
};

export default Item;
