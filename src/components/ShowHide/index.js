// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onClickFirstNameBtn = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClickLastNameBtn = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="first-name-card">
            <button
              type="button"
              className="firstnameBtn"
              onClick={this.onClickFirstNameBtn}
            >
              Show/Hide Firstname
            </button>

            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="first-name-card">
            <button
              type="button"
              className="firstnameBtn"
              onClick={this.onClickLastNameBtn}
            >
              Show/Hide Lastname
            </button>

            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
