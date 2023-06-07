import { Tabs } from '@mantine/core'
import { getPlaceToMonth } from '../../../lib/calendar'
import CalendarHeader from './CalendarHeader'
import CalendarMain from './CalendarMain'
import DaysOfWeek from './DaysOfWeek'
import { Container, Main } from './style'

export default function Calendar() {
  return (
    <Container>
      <Tabs defaultValue={getPlaceToMonth(new Date().getMonth())}>
        <CalendarHeader />
        <Main>
          <DaysOfWeek />
          <CalendarMain />
        </Main>
      </Tabs>
    </Container>
  )
}
