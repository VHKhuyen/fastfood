import { requestTikTok } from '@/utils/httpRequest'

export const search = async (q, type = 'less') => {
	try {
		const response = await requestTikTok.get('/users/search', {
			params: {
				q,
				type,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}
