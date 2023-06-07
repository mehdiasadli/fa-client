import { Button, Tabs } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { changeTab } from '../../../store/features/task.slice'
import { DescContainer, DescContent, DescHeader, DescMain, DescTitle, DIFF_MAP } from './style'
import TaskOutput from './TaskOutput'
import { Kbd } from '@mantine/core'

export default function Desc({ desc, title, category, difficulty, isSolved, id }) {
  const tab = useSelector((state) => state.task.tab)
  const dispatch = useDispatch()

  function tabChange(e) {
    dispatch(changeTab(e))
  }

  return (
    <DescContainer>
      <Tabs defaultValue={tab} onTabChange={tabChange}>
        <Tabs.List>
          <Tabs.Tab value='desc'>Desc</Tabs.Tab>
          <Tabs.Tab value='output'>Output</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='desc'>
          <DescContent>
            <DescHeader>
              <DescTitle solved={isSolved ? 1 : 0}>{title}</DescTitle>
              <Kbd>Category: {category}</Kbd>
              <Kbd style={{ color: DIFF_MAP[difficulty] }}>{difficulty}</Kbd>
            </DescHeader>
            <DescMain>{desc}</DescMain>
          </DescContent>
        </Tabs.Panel>
        <Tabs.Panel value='output'>
          <DescContent>
            <TaskOutput />
          </DescContent>
        </Tabs.Panel>
      </Tabs>
    </DescContainer>
  )
}
