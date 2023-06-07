import axios from 'axios'
import { BASE } from './index'
import { getTokenFromStorage } from '../lib/utils'

const taskService = axios.create({
  baseURL: BASE + '/tasks'
})

taskService.defaults.headers.common['x-access-token'] = getTokenFromStorage()

export const getTasks = async () => await taskService('/')
export const createTask = async (data) => await taskService.post('/', data)
export const getTask = async (id) => await taskService('/' + id)
export const deleteTask = async (id) => await taskService.delete('/' + id)
export const submitTask = async (id) => await taskService.put('/submit/' + id)
