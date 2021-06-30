import React from 'react'
import PropTypes from 'prop-types'

import { StatRow } from '../StatRow'
import { map, capitalize } from 'lodash'

export default class CoefficientsComponent extends React.Component {
  static propTypes = {
    aep: PropTypes.array.isRequired,
    assignCoefficient: PropTypes.func.isRequired
  }

  render () {
    const { aep, assignCoefficient } = this.props

    return (
      <>
        <h4> Stat coefficient </h4>
        {map(aep, (coefficient) => {
          return (
            <StatRow
              key={coefficient.name}
              assignValue={assignCoefficient}
              item={coefficient}
              title={capitalize(coefficient.name)}
            />
          )
        })}
      </>
    )
  }
}
