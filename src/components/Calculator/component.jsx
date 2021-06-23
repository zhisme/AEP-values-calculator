import React from "react";

import { Coefficients } from "../Coefficients";

const defaultAEP = {
  agility: 2.26,
  strength: 1.16,
  critical: 1.83,
  hit: 2.54,
  expertise: 2.77,
  haste: 2.2
}

export default class CalculatorComponent extends React.Component {
  render() {
    return (
      <>
        <form name="aepValues">
          <div className="row">
            <div className="col">
              <Coefficients defaultAEP={defaultAEP} />
            </div>
            <div className="col"></div>
            <div className="col">
              <div className="mb-3"></div>
            </div>
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </>
    );
  }
}
