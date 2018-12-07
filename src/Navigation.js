import React from 'react'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { ListItem } from 'material-ui/List'

import { routes } from './routes'

class Navigation extends React.Component {
  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  render() {
    // can be better optimized
    const MenuLink = (props) => (
      <Link
        to={props.to}
        style={{ textDecoration: 'none' }}
        onClick={this.toggleDrawer}
      >
        <ListItem>
          {props.label}
        </ListItem>
      </Link>
    )

    return (
      <div>
        <AppBar
          onLeftIconButtonClick={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.isDrawerOpen}
          onRequestChange={this.toggleDrawer}
        >
        {
          routes.map(route => (
            <MenuLink to={route.path} label={route.label} />
          ))
        }
        </Drawer>
      </div>
    )
  }
}

export default Navigation