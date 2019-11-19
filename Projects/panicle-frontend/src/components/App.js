import React from 'react';
import '../App.css';
import UserCard from './UserCard';
import {fetchUsers} from '../actions/userActions';
import { connect } from 'react-redux';

class App extends React.Component {


  componentDidMount() {
    this.props.getUsers()
  }
  
  render() {

    const userData = this.props.users.map(user => {
      return <UserCard user={user}/>
    })
     return(
      <div>
        {userData}
      </div>
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
