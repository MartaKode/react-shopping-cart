import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Step 3
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart``````Step1
		setCart(
			[...cart, item]
		)

	};

	// ``````Stretch`````
	const removeItem = item => {
		// debugger
		setCart(
			cart.filter( value => {
				return item !== value.id 
			})
		)
	}
	// `````````````

	return (
		<div className="App">

			{/* Step 3 */}
			<ProductContext.Provider value={{ addItem, products }}> {/* Can't we put cart inside here? */}
				{/* Step 5 b? */}
				<CartContext.Provider value={{cart, removeItem}}> {/*```Changing for Sprint`````` */}
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
				</CartContext.Provider>

			</ProductContext.Provider>
		</div>
	);
}

export default App;
