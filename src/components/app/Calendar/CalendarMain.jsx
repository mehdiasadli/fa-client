import { Tabs } from '@mantine/core'
import { isweekend, monthDays } from '../../../lib/calendar'
import { Cell, IconButton, Month } from './style'
import dayjs from 'dayjs'
import { Plus, Minus } from 'lucide-react'
import useSession from '../../../lib/hooks/useSession'
import useGetLectureDays from '../../../lib/hooks/useGetLectureDays'
import useAddLecture from '../../../lib/hooks/useAddLecture'
import useRemoveLecture from '../../../lib/hooks/useRemoveLecture'

function isActive(data, day) {
  return data
    .map((d) => d.date)
    .map((d) => new Date(d).getTime())
    .includes(day.getTime())
}

function isToday(day) {
  const today = new Date()

  return today.toDateString() === day.toDateString()
}

function getId(data, day) {
  return data.find((d) => new Date(d.date).getTime() === day.getTime())?._id || null
}

export default function CalendarMain() {
  const { user } = useSession()
  const { data, isLoading, isError } = useGetLectureDays()
  const { add, isLoading: addLoading } = useAddLecture()
  const { remove, isLoading: removeLoading } = useRemoveLecture()

  if (isError) return <div>Something went wrong</div>
  if (!data) return

  function handleClick(data, active) {
    if (active) {
      remove(data)
    } else {
      add(data)
    }
  }

  return monthDays.map((item) => (
    <Tabs.Panel key={item.name} value={item.name}>
      <Month>
        {Array.from({ length: item.first }, (_, i) => i).map((i) => (
          <Cell noborder={1} key={i} />
        ))}
        {item.value.map((day) => {
          const active = isActive(data, day)
          const id = getId(data, day)

          return (
            <Cell
              today={isToday(day) ? 1 : 0}
              active={active ? 1 : 0}
              key={day}
              isweekend={isweekend(day) ? 1 : 0}
            >
              {dayjs(day).format('D')}
              {user?.isAdmin && (
                <IconButton
                  variant='outline'
                  color={active ? 'red' : 'blue'}
                  onClick={() => handleClick(active ? id : day, active)}
                  disabled={addLoading || removeLoading || isLoading}
                >
                  {active ? <Minus size={'1rem'} /> : <Plus size={'1rem'} />}
                </IconButton>
              )}
            </Cell>
          )
        })}
      </Month>
    </Tabs.Panel>
  ))
}
