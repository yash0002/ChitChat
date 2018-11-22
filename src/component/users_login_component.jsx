/**
 * @description this is for chats display page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from "react";
import chat_service from '../services/chat_service';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import {createMuiTheme, MuiThemeProvider, Divider} from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        top: 66,
        width: 230,
        background: 'white'
      }
    }
  },
})

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class UsersLoginComponent extends Component {

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            user_login_display: []
        }
        this.peer_chat_trigger = this.peer_chat_trigger.bind(this);
    }
    componentDidMount() {
      
    var self = this;
      chat_service.chat_app_users_login(function (list) {
        // console.log('list on jsx');
        // console.log(list);        
        
        if (list !== null && list !== undefined) {
          self.setState({
              user_login_display: list
          })
        }
        else {
          self.setState({
              user_login_display : []
          })
        }
      })
    }

    peer_chat_trigger(event) {
      console.log('which one clicked');      
      console.log(event.target.id);
      console.log(event.target.key);
      window.location.replace('/peer_page');

    }

    render() {
      // console.log('state set value');
      // console.log(this.state.user_login_display);  
      
        return (
            <div styles = {styles.root}>
            <CssBaseline />
            {/* <AppBar position="fixed" styles = {styles.appBar}>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Clipped drawer
                </Typography>
              </Toolbar>
            </AppBar> */}

            <MuiThemeProvider theme = {theme} >
            <Drawer variant="permanent">
              <div styles = {styles.toolbar}/>
              <List>
                <ListItem>Users</ListItem>
                <Divider />
                {Object.keys(this.state.user_login_display).map(key => {
                  return (
                  // <ListItem button key={text}>
                      <ListItem button id = {this.state.user_login_display[key]} onClick = {this.peer_chat_trigger} key = {this.state.user_login_display[key]}>
                        <ListItemText primary={this.state.user_login_display[key]} />
                        {console.log('button values : ', this.state.user_login_display[key])}
                        
                      {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                      {/* <ListItemText primary={text} /> */}
                      </ListItem>
                  )
                })}
              </List>
            </Drawer>
            </MuiThemeProvider>
          </div>
        );
    }
}

/**
 * @exports UsersLoginComponent Class as Component in react tech
 */
export default UsersLoginComponent;