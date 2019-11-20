import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {createUser} from '../actions/userActions';



class AccountCreation extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '', 
            location: '',
            bio: '',
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
        const newUser = {username: this.state.username, location: this.state.location, bio: this.state.bio, password: this.state.password}
        this.props.createUser(newUser)
        this.props.history.push('/welcome')
    }

    render() {
        return (
            <div>
                <Header as='h3' block className='form-header'>
                    Create an Account
                </Header>            
                <Form className="account-form" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='username' name="username" onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <input placeholder='location' name="location" onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Bio</label>
                        <textarea placeholder='bio' name="bio" onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='password' name="password" onChange={this.handleChange}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        ) 
    }
}

const mapDispatch = dispatch => {
    return {
      createUser: (newUser) => {
        dispatch(createUser(newUser))
      }
    }
}

export default connect(null, mapDispatch)(AccountCreation)