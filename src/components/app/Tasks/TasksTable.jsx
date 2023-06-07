import { Table } from '@mantine/core'
import { Cell, Row } from './style'
import { convertDifficulty } from '../../../lib/utils'
import useGetTasks from '../../../lib/hooks/useGetTasks'
import { CheckCircle, CircleOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function TasksTable() {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetTasks()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong</div>

  const rows = data.map((item, i) => (
    <Row key={item._id} onClick={() => navigate('/task/' + item._id)}>
      <Cell>{i + 1}</Cell>
      <Cell>{item.isSolved ? <CheckCircle color='green' /> : <CircleOff color='red' />}</Cell>
      <Cell style={{ width: '50%' }}>{item.title}</Cell>
      <Cell diff={item.difficulty}>{convertDifficulty(item.difficulty)}</Cell>
      <Cell>{item.category}</Cell>
    </Row>
  ))
  return (
    <Table highlightOnHover verticalSpacing={'md'}>
      <thead>
        <tr>
          <th>N:</th>
          <th>Status</th>
          <th>Title</th>
          <th>Difficulty</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
