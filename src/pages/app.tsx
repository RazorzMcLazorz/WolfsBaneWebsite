import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppBar/>
        
        <Drawer/>
      </div>
    )
  }
}