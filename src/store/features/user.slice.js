import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.user = null
      state.token = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginSuccess, logout } = userSlice.actions

export default userSlice.reducer
