import React from "react";

import { AbilityCoefficient } from "../AbilityCoefficient";

export default class CoefficientsComponent extends React.Component {
  render() {
    const { strength, agility, critical, hit, expertise, haste } =
      this.props.defaultAEP;

    return (
      <>
        <h4> Stat coefficients. Default is T4 content </h4>
        <AbilityCoefficient coefficient={strength} name="Strength" />
        <AbilityCoefficient coefficient={agility} name="Agility" />
        <AbilityCoefficient coefficient={critical} name="Critical" />
        <AbilityCoefficient coefficient={hit} name="Hit" />
        <AbilityCoefficient coefficient={expertise} name="Expertise" />
        <AbilityCoefficient coefficient={haste} name="Haste" />
      </>
    );
  }
}
