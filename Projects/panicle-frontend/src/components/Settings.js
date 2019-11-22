import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Form } from 'semantic-ui-react';
import {updateUser} from '../actions/userActions'


class Settings extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            location: '',
            bio: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            username: this.props.user.user.username,
            location: this.props.user.user.location,
            bio: this.props.user.user.bio,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const initialUser = {username: this.props.user.user.username, location: this.props.user.user.location, bio: this.props.user.user.bio}
        const newUser = {username: this.state.username, location: this.state.location, bio: this.state.bio}
        this.props.updateUser(initialUser, newUser)
        this.props.history.push('./welcome')
    }

    render() {
        if (this.props.user.user !== undefined) {
            return(
                <div>
                    <Header as='h3' block className='form-header'>
                        Settings
                    </Header> 
                    <Form className="account-form" onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder={this.props.user.user.username} name='username' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Location</label>
                            <input placeholder={this.props.user.user.location} name='location' onChange={this.handleChange}  />
                        </Form.Field>
                        <Form.Field>
                            <label>Bio</label>
                            <input type='textarea' className='settings-text-area' placeholder={this.props.user.user.bio} name='bio' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Avatar</label>
                            <input type='file' placeholder='avatar' name='avatar' onChange={this.handleChange} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            )
        } else {
            console.log('settings page error', this.props)
            return <div> Loading... </div>
        }
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatch = dispatch => {
    return {
        updateUser: (initialUser, newUser) => {dispatch(updateUser(initialUser, newUser))
        }
    }
}

export default connect(mapState, mapDispatch)(Settings)