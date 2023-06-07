import { createSlice } from '@reduxjs/toolkit'

const TABS = ['desc', 'output']

const initialState = {
  tab: 'desc',
  output: null
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      if (!TABS.includes(action.payload)) {
        state.tab = 'desc'
      } else {
        state.tab = action.payload
      }
    },
    updateOutput: (state, action) => {
      state.output = action.payload
    },
    clearOutput: (state) => {
      state.output = null
    }
  }
})

export const { changeTab, updateOutput, clearOutput } = taskSlice.actions

export default taskSlice.reducer
