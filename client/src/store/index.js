import { configureStore } from '@reduxjs/toolkit'
import { authSlice, productsSlice, singleProductSlice, cartSlice } from '@/redux'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		products: productsSlice,
		singleProduct: singleProductSlice,
		cart: cartSlice,
	},
})
