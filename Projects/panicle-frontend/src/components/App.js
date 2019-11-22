import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import UserHomepage from './UserHomepage';
import Homepage from './Homepage';
import Navbar from './Navbar';
import AccountCreation from './AccountCreation';
import AccountLogin from './AccountLogin';
import Settings from './Settings';
import { connect } from 'react-redux';
import { loggedIn } from '../actions/userActions'

class App extends React.Component {

  // on login, fetch users, groups, and user_groups. State is only including group/user_group
  // when they are being createds

  componentDidMount = () => {
    if(localStorage.getItem('token')){
      this.props.loggedIn();
    }

  }
  render() {

     return(
       <Router>
         <div>
           <Navbar/>
         </div>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" render={ routerParams => <UserHomepage {...routerParams} users={this.props}/> }/>
            <Route exact path="/signup" component={AccountCreation}/>
            <Route exact path="/login" component={AccountLogin}/>
            <Route exact path="/welcome" component={UserHomepage}/>
            <Route exact path='/settings' component={Settings}/>
        </div>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loggedIn: () => dispatch(loggedIn())
  }
}

export default connect(mapState, mapDispatch)(App);
