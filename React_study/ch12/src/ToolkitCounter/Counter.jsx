import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'
// import counterSlice from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      // store에 slice가 여러개가 지정되므로 state.store에 지정한 슬라이스 key값으로 가져온다
      // state.counter = {value: 0}
      return state.counter.value
   })
   return (
      <div>
         <button
            onClick={() => {
               // 툴킷에서는 액션 생성자 함수를 자동을 생성해준다
               // dispatch(counterSlice.actions.up(2))
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               // dispatch(counterSlice.actions.down(2))
               dispatch(down(2))
            }}
         >
            -
         </button>
         {count}
      </div>
   )
}
export default Counter
