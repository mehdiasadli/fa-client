import { useSelector } from 'react-redux'

export default function TaskOutput() {
  const output = useSelector((state) => state.task.output)

  function getOutput() {
    let statusId = output?.status?.id

    if (statusId === 6) {
      return (
        <pre className='px-2 py-1 font-normal text-xs text-red-500'>
          {atob(output?.compile_output)}
        </pre>
      )
    } else if (statusId === 3) {
      return (
        <pre className='px-2 py-1 font-normal text-xs text-green-500'>
          {atob(output.stdout) !== null ? `${atob(output.stdout)}` : null}
        </pre>
      )
    } else if (statusId === 5) {
      return (
        <pre className='px-2 py-1 font-normal text-xs text-red-500'>{`Time Limit Exceeded`}</pre>
      )
    } else {
      return (
        <pre className='px-2 py-1 font-normal text-xs text-red-500'>{atob(output?.stderr)}</pre>
      )
    }
  }

  return (
    <>
      <h1 className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2'>
        Output
      </h1>
      <div className='w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto'>
        {output ? <>{getOutput()}</> : null}
      </div>
      <div className='metrics-container mt-4 flex flex-col space-y-3'>
        <p className='text-sm'>
          Status:{' '}
          <span className='font-semibold px-2 py-1 rounded-md bg-gray-100'>
            {output?.status?.description}
          </span>
        </p>
        <p className='text-sm'>
          Memory:{' '}
          <span className='font-semibold px-2 py-1 rounded-md bg-gray-100'>{output?.memory}</span>
        </p>
        <p className='text-sm'>
          Time:{' '}
          <span className='font-semibold px-2 py-1 rounded-md bg-gray-100'>{output?.time}</span>
        </p>
      </div>
    </>
  )
}
