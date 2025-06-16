import { Provider } from 'react-redux'
import storeQuiz02 from './ReduxCounter/store'
import CounterComponent from './ReduxCounter/CounterComponent'

function App() {
   return (
      <Provider store={storeQuiz02}>
         <CounterComponent />
      </Provider>
   )
}

export default App
