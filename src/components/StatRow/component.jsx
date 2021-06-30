import React from 'react'
import PropTypes from 'prop-types'

export default class StatRowComponent extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assignValue: PropTypes.func.isRequired
  }

  render () {
    const { item, assignValue, title } = this.props

    return (
      <div className="row">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {title}
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="0"
            onChange={(evt) => assignValue(evt, item)}
            defaultValue={item.value}
          />
        </div>
      </div>
    )
  }
}
