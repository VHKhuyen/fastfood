import axios from 'axios'

export const requestTikTok = axios.create({
	baseURL: 'https://tiktok.fullstack.edu.vn/api',
})

export const requestFastFood = axios.create({
	baseURL: process.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'sth',
})
