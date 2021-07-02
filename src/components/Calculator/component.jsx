import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { assign } from 'lodash'

import { Coefficients } from '../Coefficients'
import { ItemStats } from '../ItemStats'
import { CalculationInfo } from '../CalculationInfo'

@inject('store')
@observer
class CalculatorComponent extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {
    calculationResult: null
  }

  assignCoefficient = (evt, item) => {
    const { store }  = this.props
    const updatedValue = assign({}, item)

    updatedValue.value = evt.target.value

    store.updateAepValues(updatedValue)
  }

  assignItemStat = (evt, item) => {
    const { store }  = this.props
    const updatedValue = assign({}, item)

    updatedValue.value = evt.target.value

    store.updateItemStats(updatedValue)
  }

  resetResult = (evt) => {
    const { store } = this.props

    evt.preventDefault()

    this.setState({ calculationResult: null })

    store.resetAepResult()
  }

  calculateResult = (evt) => {
    const { store } = this.props

    evt.preventDefault()

    store.calculateAepResult()

    const { aepResult } = store

    this.setState({ calculationResult: aepResult })
  }

  render () {
    const { aep, itemStats } = this.props.store
    const { assignCoefficient, assignItemStat } = this
    const { calculationResult } = this.state

    return (
      <>
        <form name="aepValues">
          <div className="row">
            <div className="col" />
            <div className="col">
              <Coefficients aep={aep} assignCoefficient={assignCoefficient} />
              {(calculationResult > 0) &&
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Reset"
                  onClick={(evt) => { this.resetResult(evt) }}
                />}
            </div>
            <div className="col">
              <ItemStats itemStats={itemStats} assignItemStat={assignItemStat} />
              <input
                type="submit"
                className="btn btn-primary"
                value="Calculate"
                onClick={(evt) => { this.calculateResult(evt) }}
              />
            </div>
            <div className="col" />
          </div>

          <div className="row">
            <div className="col" />
            <div className="col">
              {((calculationResult > 0) && <CalculationInfo calculationResult={calculationResult} />)}
            </div>
            <div className="col" />
            <div className="col" />
          </div>

        </form>
      </>
    )
  }
}

export default CalculatorComponent
