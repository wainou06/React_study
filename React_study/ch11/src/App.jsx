import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

// reducer함수: state를 바꿔주는 역할
function redecer(currentState, action) {
   if (currentState === undefined) {
      return { number: 1 }
   }

   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }

   return newState
}

// store
const store = createStore(redecer)

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2 />
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2</h1>
         <Left3 />
      </div>
   )
}

function Left3() {
   // useSelector: state값을 무선연결해서 가져오기 위한 함수
   // 처음 사이트 접속 시 useSelector에서 reducer를 실행시킴
   const number = useSelector((state) => {
      return state.number
   })
   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}

function Right3() {
   // dispatch: 전달
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

function App() {
   return (
      <div className="container">
         <h1>Root</h1>
         <div className="grid">
            {/* Provider: store에 저장된 reducer, state 제공하는 역할을 한다
         제공하고 싶은 컴포넌트를 감싸주면 된다.*/}
            {/* Left1, Right1 컴포넌트에서 store에 저장된 reducer와 state를 사용할 수 있다 */}
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
      </div>
   )
}

export default App
