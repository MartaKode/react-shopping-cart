import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Step 7


const ShoppingCart = props => {
const {cart, removeItem} = useContext(CartContext) //Added removeItem for Stretch

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem}/> //Passed in removeItem for Stretch
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
