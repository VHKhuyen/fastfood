import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '@/services/productServices'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		productsLoading: false,
		products: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.productsLoading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.productsLoading = false
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.productsLoading = false
			})
	},
})
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (type) => {
	const response = await getProducts(type)
	return response.products
})
// export const {} = productSlice.actions

export default productsSlice.reducer
