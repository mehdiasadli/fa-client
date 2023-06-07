import { daysOfWeek } from '../../../lib/calendar'
import { DayCell, Days } from './style'

function getDayOfWeek() {
  const today = new Date().getDay()

  switch (today) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

export default function DaysOfWeek() {
  return (
    <Days>
      {daysOfWeek.map((item) => (
        <DayCell active={getDayOfWeek() === item ? 1 : 0} key={item}>
          {item}
        </DayCell>
      ))}
    </Days>
  )
}
