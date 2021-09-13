import React from 'react'
import { observer, Provider } from 'mobx-react'

import Store from './store'
import Calculator from './component'

@observer
class CalculatorContainer extends React.Component {
  render () {
    const store = new Store()

    return (
      <div className="container">
        <Provider store={store}>
          <Calculator />
        </Provider>
      </div>
    )
  }
}

export default CalculatorContainer
