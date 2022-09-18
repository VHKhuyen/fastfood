import { requestTikTok } from '@/utils/httpRequest'

export const search = async (controller, q, type = 'less') => {
	try {
		const response = await requestTikTok.get('/users/search', {
			signal: controller.signal,
			params: {
				q,
				type,
			},
		})
		return response.data
	} catch (error) {
		console.log(error.message)
	}
}
