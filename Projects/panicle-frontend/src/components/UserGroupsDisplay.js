import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Button, Modal, Form } from 'semantic-ui-react';
import GroupCard from './GroupCard';
import { createGroup } from '../actions/groupActions';


class UserGroupsDisplay extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            open: false
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            open: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const group = {name: this.state.name}
        const user = this.props.user.user.id
        this.props.createGroup(group, user)
        this.setState({
            open: false
        })
    }

    handleClose = (event) => {
        event.preventDefault()
        this.setState({
            open: false
        })
    }

    render() {
        return(
            <div>
                {this.state.open && 
                <Modal open>
                    <Modal.Header>Create a New Group</Modal.Header>
                    <Modal.Description>
                        <Header>Enter a name below for your new group:</Header>
                        <Form className="account-form" onSubmit={this.handleSubmit}>
                            <Form.Field onSubmit={this.handleSubmit}>
                                <label>Group Name: </label>
                                <input placeholder='name' name="name" onChange={this.handleChange} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Form>
                    </Modal.Description>                
                </Modal>}
                <Grid columns='equal' className="group-container">
                <Grid.Row stretched>
                <Grid.Column>
                    <Header as='h3' block className='form-header'>
                        Your Groups
                    </Header>
                    <Button className="account-button" basic color='violet' onClick={this.handleClick}>Create Group</Button>
                    <div className='group-card'>
                        <GroupCard />
                    </div>
                </Grid.Column>
                </Grid.Row>
                </Grid>
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
        createGroup: (group, user) => dispatch(createGroup(group, user))
    }
}

export default connect(mapState, mapDispatch)(UserGroupsDisplay)