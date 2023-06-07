import axios from 'axios'
import { BASE } from './index'

const authService = axios.create({
  baseURL: BASE + '/auth'
})

export const signin = async (data) => await authService.post('/login', data)
