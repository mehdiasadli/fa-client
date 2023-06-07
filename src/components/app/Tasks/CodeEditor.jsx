import { EditorContainer } from './style'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'
import { Button } from '@mantine/core'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { changeTab, updateOutput } from '../../../store/features/task.slice'
import toast from 'react-hot-toast'
import useSubmit from '../../../lib/hooks/useSubmit'

export default function CodeEditor({ code, isSolved, id, results }) {
  const [processing, setProcessing] = useState(false)
  const { solveTask, isLoading } = useSubmit(id)
  const dispatch = useDispatch()
  const ref = useRef(null)

  function handleEditorDidMount(editor) {
    ref.current = editor
  }

  async function checkStatus(token) {
    const options = {
      method: 'GET',
      url: import.meta.env.VITE_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
      }
    }

    try {
      let response = await axios.request(options)
      let statusId = response.data.status?.id

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        dispatch(updateOutput(response.data))

        dispatch(changeTab('output'))
        const out = atob(response?.data?.stdout)

        if (out === results) {
          solveTask()
          return
        }

        return
      }
    } catch (err) {
      console.error('err', err)
      dispatch(changeTab('output'))
      toast.error('Program Failed')
    } finally {
      setProcessing(false)
    }
  }

  function handleCompile() {
    setProcessing(true)
    const data = ref.current.getValue()

    const formData = {
      language_id: 63,
      source_code: btoa(data)
    }

    const options = {
      method: 'POST',
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
      },
      data: formData
    }

    axios
      .request(options)
      .then((res) => {
        const token = res.data.token
        checkStatus(token)
      })
      .catch((err) => {
        console.warn(err)
      })
      .finally(() => {
        setProcessing(false)
      })
  }

  return (
    <EditorContainer solved={isSolved ? 1 : 0}>
      <Editor
        defaultLanguage='javascript'
        defaultValue={code || '// write a function below'}
        onMount={handleEditorDidMount}
      />
      <Button
        variant='outline'
        color='green'
        onClick={handleCompile}
        style={{ position: 'absolute', bottom: '1rem', right: '2rem' }}
        disabled={isLoading || isSolved}
      >
        {processing ? 'Processing...' : 'Test'}
      </Button>
    </EditorContainer>
  )
}
