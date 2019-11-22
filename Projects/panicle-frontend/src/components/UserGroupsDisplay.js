import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Segment, Header, Button, Modal, Form } from 'semantic-ui-react';
import GroupCard from './GroupCard';
import {createGroup} from '../actions/groupActions';


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
        this.props.createGroup(group)
        console.log(this.props.user.user)
    }

    // do I want to add users to the group table? or make an action to create a user_group and 
    //send it the current user id and the created group id???

    render() {
        // let groupData = []
        // if (Object.keys(this.props.user).length !== 0 ) {
        //     console.log(Object.keys(this.props.user).length, this.props.user)
        //     groupData = this.props.user.user.groups.map(group => {
        //         return <GroupCard group={group}/>
        //     }) 
        // } else {console.log('user error')}
        
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
                        </Form>
                    </Modal.Description>                
                </Modal>}
                <Grid columns='equal'>
                <Grid.Row stretched>
                <Grid.Column>
                    <Header as='h3' block className='form-header'>
                        Your Groups
                    </Header>
                    <Button className="account-button" basic color='violet' onClick={this.handleClick}>Create Group</Button>
                    {/* {groupData} */}
                </Grid.Column>
                <Grid.Column width={6}>
                    <Segment>
                    <Image src='/images/wireframe/paragraph.png' />
                    {/* {userData} */}
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
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
        createGroup: (group) => dispatch(createGroup(group))
    }
}

export default connect(mapState, mapDispatch)(UserGroupsDisplay)