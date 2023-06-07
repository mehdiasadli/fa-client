import Split from 'react-split'
import Desc from '../components/app/Tasks/Desc'
import CodeEditor from '../components/app/Tasks/CodeEditor'
import { useParams } from 'react-router-dom'
import '../styles/editor.css'
import useGetTask from '../lib/hooks/useGetTask'

export default function TaskPage() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetTask(id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong...</div>

  return (
    <Split className='split' minSize={295}>
      <Desc
        desc={data.desc}
        title={data.title}
        difficulty={data.difficulty}
        category={data.category}
        isSolved={data.isSolved}
        id={data._id}
      />
      <CodeEditor code={data?.code} isSolved={data.isSolved} id={data._id} results={data.results} />
    </Split>
  )
}
