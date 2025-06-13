import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'

import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'

function App() {
   return (
      <Provider store={storeUseToolkit}>
         {/* <Counter /> */}
         <Counter />
      </Provider>
   )
}

export default App
