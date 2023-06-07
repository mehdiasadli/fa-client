import { Tabs } from '@mantine/core'
import { monthValues } from '../../../lib/calendar'
import { Header } from './style'

export default function CalendarHeader() {
  return (
    <Header>
      <Tabs.List>
        {monthValues.map((item) => (
          <Tabs.Tab key={item.value} value={item.value}>
            {item.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Header>
  )
}
