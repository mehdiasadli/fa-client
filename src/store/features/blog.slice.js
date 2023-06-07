import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  content: ''
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload
    },
    addContent: (state, action) => {
      state.content = action.payload
    },
    edit: (state, action) => {
      state.title = action.payload.title
      state.content = action.payload.content
    },
    clear: (state) => {
      state.title = ''
      state.content = ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTitle, addContent, edit, clear } = blogSlice.actions

export default blogSlice.reducer
