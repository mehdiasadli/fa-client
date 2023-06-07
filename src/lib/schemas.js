import * as z from 'zod'
import { CATEGORIES, DIFFICULTIES } from '../pages/CreateTaskPage'

export const loginSchema = z.object({
  username: z.string({ required_error: 'Username is required' }).min(1, 'Username is required'),
  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required')
})

const CATEGORY_ENUM = [
  'No Category',
  'Array',
  'Function',
  'Math',
  'String',
  'Boolean',
  'Tree',
  'Graph',
  'Search',
  'Sort',
  'Linked List',
  'Stack',
  'Queue',
  'Number',
  'Object',
  'Dynamic Programming'
]
const DIFFICULTY_ENUM = ['SUPER_EASY', 'EASY', 'MEDIUM', 'HARD', 'SUPER_HARD']

export const createTaskSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string'
      })
      .min(3, 'Task title has to be at least 3 characters long'),
    desc: z
      .string({
        required_error: 'Desc. is required',
        invalid_type_error: 'Desc. must be a string'
      })
      .min(20, 'A task desc. has to be at least 20 characters long'),
    difficulty: z.enum(DIFFICULTY_ENUM),
    category: z.enum(CATEGORY_ENUM),
    code: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string'
      })
      .min(1, 'Task code has to be at least 1character long'),
    results: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Results must be a string'
      })
      .min(1, 'Task results has to be at least 1 character long')
  })
})
