import { requestFastFood } from '@/utils/httpRequest'

const getProducts = async (type) => {
	try {
		const response = await requestFastFood.get(`/api/v1/products/new`)
		if (response.data.success) {
			return response.data
		}
	} catch (error) {
		if (error.response.data) {
			return error.response.data
		} else return { success: false, message: error.message }
	}
}
export { getProducts }
