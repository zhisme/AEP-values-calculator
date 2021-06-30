import React from 'react'
import PropTypes from 'prop-types'

import { observer } from 'mobx-react'

@observer
class CalculationInfoComponent extends React.Component {
  static propTypes = {
    calculationResult: PropTypes.number.isRequired
  }

  render () {
    const { calculationResult } = this.props

    return (
      <>
        <p> calculated AEP value </p>
        <p>
          <b> {calculationResult} </b>
        </p>
      </>
    )
  }
}

export default CalculationInfoComponent
