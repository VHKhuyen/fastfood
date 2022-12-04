import { requestFastFood } from '@/utils/httpRequest'

const getProducts = async (type) => {
	try {
		const response = await requestFastFood.get(`/products/${type}`)
		if (response.data.success) {
			return response.data
		}
	} catch (error) {
		if (error.response.data) {
			return error.response.data
		} else return { success: false, message: error.message }
	}
}

const getSingleProduct = async (slug) => {
	try {
		const response = await requestFastFood.get(`/products/${slug}`)
		if (response.data.success) {
			return response.data
		}
	} catch (error) {
		if (error.response.data) {
			return error.response.data
		} else return { success: false, message: error.message }
	}
}
export { getProducts, getSingleProduct }
