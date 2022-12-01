import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts, getSingleProduct } from '@/services/productServices'

const singleProductSlice = createSlice({
	name: 'singleProduct',
	initialState: {
		loading: false,
		singleProduct: {},
		productRelated: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSingleProduct.pending, (state, action) => {
				state.loading = true
			})
			.addCase(fetchSingleProduct.fulfilled, (state, action) => {
				state.loading = false
				state.singleProduct = action.payload[0]
				state.productRelated = action.payload[1]
			})
			.addCase(fetchSingleProduct.rejected, (state, action) => {
				state.loading = false
			})
	},
})
export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (slug) => {
	const resProduct = await getSingleProduct(slug)
	if (resProduct.success) {
		const resProducts = await getProducts(resProduct.products.category)
		return [resProduct.products, resProducts.products]
	}
})
// export const {} = productSlice.actions

export default singleProductSlice.reducer
