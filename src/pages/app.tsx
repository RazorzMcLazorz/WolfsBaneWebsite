import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppBar/>
        
        <Drawer/>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return state
}
const Appr = connect(mapStateToProps, actions)(App);
export default Appr;