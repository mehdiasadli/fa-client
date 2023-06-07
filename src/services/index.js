// import axios from 'axios'

export const BASE =
  import.meta.env.NODE_ENV === 'production'
    ? import.meta.env.VITE_SERVER_URL
    : 'http://localhost:7676/api'
