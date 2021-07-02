import React from 'react'
import { hot } from 'react-hot-loader/root'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Calculator } from './components/Calculator'

class App extends React.Component {
  render () {
    return (
      <>
        <header id="navbarHeader" className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <img src="logo.png" width="45" />
              <strong className="fs-4">AEP calculator</strong>
            </a>

            <a rel="noreferrer" target="_blank" href="https://github.com/zhisme" className="header-link">
              <span className='nickname'>zhisme</span>
              <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
        </header>

        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">WoW Burning Crusade AEP calculator</h1>
              <p className="lead text-muted">
                This AEP calculator took its idea from <a rel="noreferrer" target="_blank" href="https://silentshadows.net/rogue-stat-weights-aep-values/"> rogues fan site </a><br/>
                For phase 4 coefficients are already there, you don't need to touch them (mostly), just enter your newly acquired item on the right side
                to see if it's better that you already own or not. <br />
                I wish you a nice play, thug guy!
              </p>
            </div>
          </section>
          <Calculator />
        </main>

        <footer className="text-muted">
          <div className="container">
            <p> © <a href="https://github.com/zhisme"> zhisme</a> </p>
            <p> Feel free  <a href="https://github.com/zhisme/AEP-values-calculator"> to contribute </a> or post any issues <a href="https://github.com/zhisme/AEP-values-calculator/issues">if you want to share something</a>.</p>
          </div>
        </footer>
      </>
    )
  }
}

export default hot(App)
