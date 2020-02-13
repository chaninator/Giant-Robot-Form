import React from 'react'
import LeftColumnContainer from './Containers/LeftColumnContainer'
import RightColumnContainer from './Containers/RightColumnContainer'
import MyForm from './Components/MyForm'
import Logo from './images/GiantRobotLTD_Logo.svg'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app-container">
      <LeftColumnContainer>
        <img className="logo" src={Logo} alt=""/>
        <h1 className="title">Welcome</h1>
        <p className="body">Please tell us a bit about yourself to get started.</p>
      </LeftColumnContainer>
      <RightColumnContainer>
        <MyForm />
      </RightColumnContainer>
    </div>
  )
}

export default App
