import React from "react";

export default class AbilityCoefficientComponent extends React.Component {
  render() {
    const { coefficient, name } = this.props;

    return (
      <div className="row">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            { name }
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="0"
            defaultValue={coefficient}
          />
        </div>
      </div>
    );
  }
}
