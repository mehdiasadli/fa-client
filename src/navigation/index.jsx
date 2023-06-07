import { Routes, Route } from 'react-router-dom'
import AppLayout from '../components/layouts/AppLayout'
import CalendarPage from '../pages/CalendarPage'
import Home from '../pages/Home'
import Providers from './Providers'
import PrivateRoute from './PrivateRoute'
import BlogsPage from '../pages/BlogsPage'
import CreateBlogPage from '../pages/CreateBlogPage'
import BlogPage from '../pages/BlogPage'
import TasksPage from '../pages/TasksPage'
import TaskPage from '../pages/TaskPage'
import CreateTaskPage from '../pages/CreateTaskPage'

export default function App() {
  return (
    <Providers>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route
            path='/create/blog'
            element={<PrivateRoute element={<CreateBlogPage />} onlyAdmin />}
          />
          <Route
            path='/create/task'
            element={<PrivateRoute element={<CreateTaskPage />} onlyAdmin />}
          />
          <Route path='/calendar' element={<PrivateRoute element={<CalendarPage />} />} />
          <Route path='/tasks' element={<PrivateRoute element={<TasksPage />} />} />
          <Route path='/task/:id' element={<PrivateRoute element={<TaskPage />} />} />
          <Route path='/blog/:id' element={<BlogPage />} />
        </Routes>
      </AppLayout>
    </Providers>
  )
}
