import React from 'react'
import PropTypes from 'prop-types'

import { StatRow } from '../StatRow'
import { map, capitalize } from 'lodash'

export default class ItemStatsComponent extends React.Component {
  static propTypes = {
    itemStats: PropTypes.array.isRequired,
    assignItemStat: PropTypes.func.isRequired
  }

  render () {
    const { itemStats, assignItemStat } = this.props

    return (
      <>
        <h4> Enter item stats </h4>
        {map(itemStats, (item) => (
          <StatRow
            key={`itemStat-${item.name}`}
            assignValue={assignItemStat}
            item={item}
            title={capitalize(item.name)}
          />
        ))}
      </>
    )
  }
}
