import React, { Component } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CustomDrawer from './Drawer'

export default class ButtonAppBar extends Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: 'space-between' }}>

            {/* <CustomDrawer icon={<MenuIcon/>} list={
              [
              'Inventory', 
              ]
            }/> */}
            
            <a href='/' style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="h6">
                Wolf's Bane Cabinetry and Furniture
              </Typography>
            </a>

            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}