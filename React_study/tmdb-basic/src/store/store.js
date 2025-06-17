import { configureStore } from '@reduxjs/toolkit'
import moviReducer from '../features/movieSlice'

const store = configureStore({
   reducer: {
      movies: moviReducer,
   },
})

export default store
