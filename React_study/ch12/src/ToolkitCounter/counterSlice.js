import { createSlice } from '@reduxjs/toolkit'

// reducer대신 slice 생성
const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름
   initialState: { value: 0 }, // 초기 state
   reducers: {
      up: (state, action) => {
         // ★ 툴킷은 자동으로 불변성 유지를 해주므로 직접 state값을 바꿔도 된다
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer
export const { up, down } = counterSlice.actions
