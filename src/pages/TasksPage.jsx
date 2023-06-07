import TasksTable from '../components/app/Tasks/TasksTable'
import useSession from '../lib/hooks/useSession'
import styled from 'styled-components'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ActionIcon } from '@mantine/core'

const Btn = styled(ActionIcon)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
`
export default function TasksPage() {
  const navigate = useNavigate()
  const { user } = useSession()

  return (
    <>
      <TasksTable />
      {user?.isAdmin && (
        <Btn
          size='xl'
          color='blue'
          variant={'outline'}
          radius='xl'
          onClick={() => navigate('/create/task')}
        >
          <Plus size='5rem' />
        </Btn>
      )}
    </>
  )
}
