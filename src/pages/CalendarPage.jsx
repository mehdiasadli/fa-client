import styled from 'styled-components'
import Calendar from '../components/app/Calendar'

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

export default function CalendarPage() {
  return (
    <CalendarContainer>
      <Calendar />
    </CalendarContainer>
  )
}
