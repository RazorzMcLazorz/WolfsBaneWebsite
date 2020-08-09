import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'

class CustomDrawer extends Component {
  state = {
    open: false
  }

  render() {
    return (
    <div>
      <IconButton color="inherit" onClick={() => this.setState({ open: true })}>
        {/* {this.props.icon} */}
      </IconButton>
      <Drawer 
        open={this.state.open}
        onClose={() => this.setState({ open: false })}>
        <div style={{ width: 240 }}>
          <Typography>ima list</Typography>
        <List>
          {/* {console.log(this.props.list)}
          {this.props.list ? 
            this.props.list.map(item => {
              <ListItem>
                <ListItemText>
                  <Typography>
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            })
          : undefined} */}
        </List>
        </div>
      </Drawer>
    </div>
    )
  }
}

export default CustomDrawer