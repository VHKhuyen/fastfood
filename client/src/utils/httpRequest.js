import axios from 'axios'

export const requestTikTok = axios.create({
	baseURL: process.env.REACT_APP_TIKTOK_URL,
})

export const requestFastFood = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})
