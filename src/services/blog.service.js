import axios from 'axios'
import { BASE } from './index'
import { getTokenFromStorage } from '../lib/utils'

const blogService = axios.create({
  baseURL: BASE + '/blogs'
})

blogService.defaults.headers.common['x-access-token'] = getTokenFromStorage()

export const getBlogs = async () => await blogService('/')
export const getBlog = async (id) => await blogService('/' + id)
export const createBlog = async (data) => await blogService.post('/', data)
export const publishBlog = async (id) => await blogService.put('/publish/' + id)
export const updateBlog = async ({ id, data }) => await blogService.put('/' + id, data)
export const deleteBlog = async (id) => await blogService.delete('/' + id)
