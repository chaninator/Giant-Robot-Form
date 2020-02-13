import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

import arrow from '../images/White_Arrow.svg'

export default class MyForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      firstNameError: '',
      lastNameError: '',
      addressError: ''
    }
  }

  validator = () => {
    let fnameErr = ''
    let lnameErr = ''
    let addressErr = ''

    if (!this.state.firstName) {
      fnameErr = true
      this.setState({
        firstNameError: 'error'
      })
    }

    if (!this.state.lastName) {
      lnameErr = true
      this.setState({
        lastNameError: 'error'
      })
    }

    if (!this.state.address) {
      addressErr = true
      this.setState({
        addressError: 'error'
      })
    }

    if (fnameErr || lnameErr || addressErr) {
      return false
    }

    return true
  }

  handleSubmit = event => {
    event.preventDefault()
    const isValid = this.validator()
    if (isValid) {
      console.log(this.state)
      document.getElementById('myForm').reset();
      alert(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Address: ${this.state.address}
        Address2: ${this.state.address2}
      `)
    } else console.error('form error')
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
      [event.target.getAttribute('error')]: ''
    })
  }

  render() {

    return(
      <Form id="myForm">
        <Form.Label>
          FIRST NAME 
          <span className={this.state.firstNameError === 'error' ? 'label-error' : 'label-error-hide'}> REQUIRED</span>
        </Form.Label>
        <Form.Control 
          type="text" 
          name="firstName"
          error="firstNameError" 
          value={this.state.firstName}
          onChange={this.handleChange}
          className={this.state.firstNameError}
        />
        <Form.Label>
          LAST NAME
          <span className={this.state.lastNameError === 'error' ? 'label-error' : 'label-error-hide'}> REQUIRED</span>
        </Form.Label>
        <Form.Control 
          type="text" 
          name="lastName" 
          error="lastNameError" 
          value={this.state.lastName}
          onChange={this.handleChange}
          className={this.state.lastNameError}
        />
        <Form.Label>
          ADDRESS 
          <span className={this.state.addressError === 'error' ? 'label-error' : 'label-error-hide'}> REQUIRED</span>
        </Form.Label>
        <Form.Control 
          type="text" 
          name="address"
          error="addressError" 
          value={this.state.address} 
          onChange={this.handleChange}
          className={this.state.addressError}
        />
        <Form.Label>ADDRESS 2 (OPTIONAL)</Form.Label>
        <Form.Control 
          type="text" 
          name="address2" 
          value={this.state.address2}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleSubmit}>
          Next
          <img className="btn-arrow" src={arrow} alt=""/>
        </Button>
      </Form>
    )
  }
}