/* eslint-disable react-refresh/only-export-components */
import { Button, Select, Textarea, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'
import useCreateTask from '../lib/hooks/useCreateTask'
import { createTaskSchema } from '../lib/schemas'
import { TaskContainer } from './style'

export const CATEGORIES = [
  { value: 'No Category', label: 'No Category' },
  { value: 'Array', label: 'Array' },
  { value: 'Function', label: 'Function' },
  { value: 'Math', label: 'Math' },
  { value: 'String', label: 'String' },
  { value: 'Boolean', label: 'Boolean' },
  { value: 'Tree', label: 'Tree' },
  { value: 'Graph', label: 'Graph' },
  { value: 'Search', label: 'Search' },
  { value: 'Sort', label: 'Sort' },
  { value: 'Linked List', label: 'Linked List' },
  { value: 'Stack', label: 'Stack' },
  { value: 'Queue', label: 'Queue' },
  { value: 'Number', label: 'Number' },
  { value: 'Object', label: 'Object' },
  { value: 'Dynamic Programming', label: 'Dynamic Programming' }
]
export const DIFFICULTIES = [
  {
    value: 'SUPER_EASY',
    label: 'Super Easy'
  },
  {
    value: 'EASY',
    label: 'Easy'
  },
  {
    value: 'MEDIUM',
    label: 'Medium'
  },
  {
    value: 'HARD',
    label: 'Hard'
  },
  {
    value: 'SUPER_HARD',
    label: 'Super Hard'
  }
]

export default function CreateTaskPage() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    difficulty: '',
    category: '',
    code: '',
    results: ''
  })

  const { saveTask, isLoading } = useCreateTask()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()

    saveTask(formData)
  }

  return (
    <TaskContainer onSubmit={onSubmit}>
      <TextInput
        disabled={isLoading}
        value={formData.title}
        onChange={handleChange}
        name='title'
        placeholder='Enter the Title'
      />
      <Textarea
        disabled={isLoading}
        value={formData.desc}
        onChange={handleChange}
        name='desc'
        autosize
        minRows={5}
        placeholder='Enter the Description'
      ></Textarea>
      <Textarea
        disabled={isLoading}
        value={formData.code}
        onChange={handleChange}
        name='code'
        autosize
        minRows={5}
        placeholder='Enter the Function'
      ></Textarea>
      <Textarea
        disabled={isLoading}
        value={formData.results}
        onChange={handleChange}
        name='results'
        autosize
        minRows={3}
        placeholder='Enter the Output'
      ></Textarea>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Select
          disabled={isLoading}
          style={{ width: '20rem' }}
          name='difficulty'
          placeholder='Difficulty'
          data={DIFFICULTIES}
          value={formData.difficulty}
          onChange={(value) => setFormData({ ...formData, difficulty: value })}
        />
        <Select
          disabled={isLoading}
          style={{ width: '20rem' }}
          name='category'
          placeholder='Category'
          data={CATEGORIES}
          value={formData.category}
          onChange={(value) => setFormData({ ...formData, category: value })}
        />
        <Button disabled={isLoading} type='submit' style={{ flex: 1 }} variant='outline'>
          Save
        </Button>
      </div>
    </TaskContainer>
  )
}
