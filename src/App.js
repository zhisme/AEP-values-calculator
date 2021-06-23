import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Calculator } from "./components/Calculator";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Calculator />
        </div>
      </>
    );
  }
}

export default hot(App);
