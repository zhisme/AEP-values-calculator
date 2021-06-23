import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Coefficients } from "./components/Coefficients";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Coefficients />
            </div>
            <div className="col">
              <div className="mb-3">
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default hot(App);
