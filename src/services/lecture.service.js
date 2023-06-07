import axios from 'axios'
import { BASE } from './index'
import { getTokenFromStorage } from '../lib/utils'

const lectureService = axios.create({
  baseURL: BASE + '/lectures'
})

lectureService.defaults.headers.common['x-access-token'] = getTokenFromStorage()

export const getLectureDays = async () => await lectureService('/')
export const addLecture = async (date) => await lectureService.post('/', { date })
export const removeLecture = async (id) => await lectureService.delete('/' + id)
