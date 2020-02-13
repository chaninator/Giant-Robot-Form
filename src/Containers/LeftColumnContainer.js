import React, { Component } from 'react'

export default class LeftColumnContainer extends Component {

  render() {

    return(
      <div className="left-column-container container-fluid px-0"> 
        <div className="inner-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}