import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'
import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store'

// import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   return (
      <Provider store={store}>
         {/* <Counter /> */}
         <Counter />
         {/* <User /> */}
      </Provider>
   )
}

export default App
