import React from 'react'
import clsx from 'clsx'
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND
} from 'lexical'
import { $generateHtmlFromNodes } from '@lexical/html'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { mergeRegister } from '@lexical/utils'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Bold,
  Underline,
  Italic,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight
} from 'lucide-react'
import useBlogEdit from '../../lib/hooks/useBlogEdit'

export default function Editor() {
  const { changeContent } = useBlogEdit()

  function onChange(_, editor) {
    editor.update(() => {
      const html = $generateHtmlFromNodes(editor, null)
      changeContent(html)
    })
  }

  return (
    <div className='bg-white relative rounded-md shadow-sm border border-gray-200'>
      <LexicalComposer
        initialConfig={{
          theme: {
            paragraph: 'mb-1',
            rtl: 'text-right',
            ltr: 'text-left',
            text: {
              bold: 'font-bold',
              italic: 'italic',
              underline: 'underline'
            }
          },
          onError(error) {
            throw error
          }
        }}
      >
        <RichTextPlugin
          contentEditable={
            <ContentEditable className='min-h-[100px] outline-none py-[15px] px-2.5 resize-none overflow-hidden text-ellipsis' />
          }
          placeholder={
            <div className='absolute top-[15px] left-[10px] pointer-events-none select-none text-slate-400'>
              Enter some text...
            </div>
          }
        />
        <Toolbar />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  )
}

const Toolbar = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = React.useState(false)
  const [isItalic, setIsItalic] = React.useState(false)
  const [isUnderline, setIsUnderline] = React.useState(false)

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection()

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor])

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      })
    )
  }, [updateToolbar, editor])

  return (
    <div className='absolute z-20 shadow -bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 min-w-52 rounded-full h-10 px-2 py-2 bg-[#1b2733] space-x-2 flex items-center'>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isBold ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
        }}
      >
        <Bold color='white' />
      </button>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isItalic ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
        }}
      >
        <Italic color='white' />
      </button>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isUnderline ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
        }}
      >
        <Underline color='white' />
      </button>

      <span className='w-[1px] bg-gray-600 block h-full'></span>

      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')
        }}
      >
        <AlignLeft color='white' />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')
        }}
      >
        <AlignCenter color='white' />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')
        }}
      >
        <AlignRight color='white' />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')
        }}
      >
        <AlignJustify color='white' />
      </button>
    </div>
  )
}
