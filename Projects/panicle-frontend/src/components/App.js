import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import UserHomepage from './UserHomepage';
import Homepage from './Homepage';
import Navbar from './Navbar';
import AccountCreation from './AccountCreation';
import AccountLogin from './AccountLogin';
import { connect } from 'react-redux';
import { loggedIn } from '../actions/userActions'

class App extends React.Component {

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
