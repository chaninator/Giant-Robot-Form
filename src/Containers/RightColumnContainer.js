import React, { Component } from 'react'
import Logo from '../images/GiantRobotLTD_Logo.svg'

export default class RightColumnContainer extends Component {

  render() {

    return(
      <div className="right-column-container container-fluid px-0">
        <div className="mobile-header">
          <img className="logo" src={Logo} alt=""/>
          <h1 className="title">Welcome</h1>
          <p className="body">Please tell us a bit about yourself to get started.</p>
        </div>
        <div className="inner-container">
          {this.props.children}
        </div>
      </div> 
    )
  }
}