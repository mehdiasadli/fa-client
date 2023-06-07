import { useDispatch, useSelector } from 'react-redux'
import { addContent, addTitle, edit, clear } from '../../store/features/blog.slice'

export default function useBlogEdit() {
  const dispatch = useDispatch()
  const { title, content } = useSelector((state) => state.blog)

  function changeTitle(value) {
    dispatch(addTitle(value))
  }
  function changeContent(value) {
    dispatch(addContent(value))
  }
  function clearDraft() {
    dispatch(clear())
  }
  function editBlog(data) {
    dispatch(edit(data))
  }

  return { title, content, changeTitle, changeContent, clearDraft, editBlog }
}
