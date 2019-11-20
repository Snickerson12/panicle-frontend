import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from "react-router";

class Navbar extends React.Component {

    handleSignup = () => {
        return this.props.history.push('/signup')
    }

    handleLogin = () => {
        return this.props.history.push('/login')
    }

    render() {
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <a href='/'>
                        <img src='./logo-grey.png' alt='logo'/>
                    </a>
                    <div className="right menu">
                        <Button className="account-button" basic color='violet' onClick={this.handleLogin}>
                            Login
                        </Button>
                        <Button className="account-button" basic color='violet' onClick={this.handleSignup}>
                            Create an Account
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(Navbar))