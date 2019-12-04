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
import NewPost from './NewPost';
import ViewPost from './ViewPost';
import { connect } from 'react-redux';
import PhotoPage from './PhotoPage';
import { loggedIn } from '../actions/userActions';

class App extends React.Component {

  componentDidMount = () => {
    if(localStorage.getItem('token')){
      this.props.loggedIn();
      console.log(this.props)
    } else {
      console.log('componentmounted', this.props)
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
            <Route exact path='/group/:id/newPost' component={NewPost}/>
            <Route exact path='/group/:id/post/:id' component={ViewPost}/>
            <Route exact path='/group/:id/photos' component={PhotoPage}/>
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
