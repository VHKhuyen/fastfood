import { createSlice } from '@reduxjs/toolkit'
const cartItemFromLocalStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: cartItemFromLocalStorage,
	},
	reducers: {
		addItem: (state, action) => {
			const existItem = state.cartItems.find((item) => {
				return item.product.slug === action.payload.product.slug
			})
			if (existItem) {
				state.cartItems.map((item) =>
					item.product.slug === action.payload.product.slug
						? (item.qty = action.payload.qty)
						: item,
				)
			} else {
				state.cartItems.push(action.payload)
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.product.slug !== action.payload.slug)
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
		},
	},
})
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
