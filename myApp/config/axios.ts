import axios from 'axios'
import { getContentType } from '@/utils/api/getContentType'

export const API_URL = `${process.env.APP_URL}/api/`

export const axiosBuffed = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
