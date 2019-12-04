import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {getUser} from '../actions/userActions';

class AccountLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
          }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const potentialUser = {username: this.state.username, password: this.state.password}
        this.props.getUser(potentialUser)
    }

    render() {
        if (this.props.user.user !== undefined) {
            this.props.history.push('/welcome')
        }

        return (
            <div>
                <Header as='h3' block className='form-header'>
                    Login
                </Header>            
                <Form className="account-form" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='username' name="username" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='password' name="password" onChange={this.handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
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
        getUser: (potentialUser) => {
            dispatch(getUser(potentialUser))
        }
    }
}

export default connect(mapState, mapDispatch)(AccountLogin)