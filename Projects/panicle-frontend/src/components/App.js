import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import UserHomepage from './UserHomepage';
import Homepage from './Homepage';
import Navbar from './Navbar';
import AccountCreation from './AccountCreation';
import AccountLogin from './AccountLogin';
import Settings from './Settings';
import GroupPage from './GroupPage';
import { connect } from 'react-redux';
import { loggedIn } from '../actions/userActions'
import { getGroup } from '../actions/groupActions';

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
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/group/:id' component={GroupPage}/>
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
    loggedIn: () => dispatch(loggedIn()),
    getGroup: () => dispatch(getGroup())
  }
}

export default connect(mapState, mapDispatch)(App);
