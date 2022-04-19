import React from 'react'
import logo from "../logo.svg";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='main-layout'>
        <h1>Main layout</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default MainLayout
