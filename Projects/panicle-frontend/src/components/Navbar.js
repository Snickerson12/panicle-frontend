import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { logoutUser } from '../actions/userActions';
import {getGroup} from '../actions/groupActions';
import {getPendingUsers} from '../actions/pendingUserActions';

class Navbar extends React.Component {

    handleSignup = () => {
        return this.props.history.push('/signup')
    }

    handleLogin = () => {
        return this.props.history.push('/login')
    }

    handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        const currentUser = this.props.user.user
        this.props.logoutUser(currentUser)
        this.props.history.push('/')
    }

    handleDirect = async (event) => {
        event.preventDefault()
        const user = this.props.user.user.username
        const userId = this.props.user.user.id
        await this.props.getGroup(user)
        await this.props.getPendingUsers(userId)
        this.props.history.push('/welcome')
    }

    render() {
        const { user } = this.props
        let loginButtons;
        if (user.user) {
            loginButtons = (
                <div className="right menu">
                    <Button className="account-button" basic color='violet' onClick={this.handleLogout}>Logout</Button>
                    <Button className="account-button" basic color='violet' onClick={this.handleDirect}>Your Account</Button>
                </div>
            )
        } else {
            loginButtons = (
                <div className='right menu'>
                    <Button className="account-button" basic color='violet' onClick={this.handleLogin}>Login</Button>
                    <Button className="account-button" basic color='violet' onClick={this.handleSignup}>Create an Account</Button>
                </div>
            )
        }
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <a href='/'>
                        <img src='/logo-grey.png' alt='logo'/>
                    </a>
                    {loginButtons}
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        group: state.group
    }
}

const mapDispatch = dispatch => {
    return {
        logoutUser: (currentUser) => dispatch(logoutUser(currentUser)),
        getGroup: (user) => dispatch(getGroup(user)),
        getPendingUsers: (userId) => dispatch(getPendingUsers(userId))
    }
}

export default connect(mapState, mapDispatch)(withRouter(Navbar))