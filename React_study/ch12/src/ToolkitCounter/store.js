import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
   reducer: {
      //키값 Slice이름하고 동일하게 지정
      counter: counterSlice,
   },
})

export default store
