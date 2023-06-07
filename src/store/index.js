import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user.slice'
import blogReducer from './features/blog.slice'
import taskReducer from './features/task.slice'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
  task: taskReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export const persistor = persistStore(store)
