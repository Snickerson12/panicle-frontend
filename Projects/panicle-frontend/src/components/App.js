import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import {fetchUsers} from '../actions/userActions';
import { connect } from 'react-redux';
import UserHomepage from './UserHomepage';
import Homepage from './Homepage';
import Navbar from './Navbar'

class App extends React.Component {


  componentDidMount() {
    this.props.getUsers()
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

        </div>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: () => {
      dispatch(fetchUsers())
    }
  }
}


export default connect(
  mapState,
  mapDispatch
)(App);
