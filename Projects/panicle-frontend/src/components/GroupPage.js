import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Button, Modal, Form } from 'semantic-ui-react';
import {getPost} from '../actions/postActions';
import { withRouter } from "react-router";
import { createPendingUser } from '../actions/pendingUserActions';

class GroupPage extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }
    
    handleClick = (event) => {
        event.preventDefault()
        this.props.history.push('/newPost')
    }

    componentDidMount = () => {
        const groupId = this.props.match.params.id
        this.props.getPost(groupId)
    }

    handleView = (event) => {
        const postId = event.target.id
        this.props.history.push('/post/'+ (postId))
    }

    handlePhotosClick = () => {
        const groupId = this.props.match.params.id
        this.props.history.push(groupId + '/photos')
        // localhost:3001/group/id/photos
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const groupId = this.props.match.params.id
        const userEmail = this.state.email
        this.props.createPendingUser(groupId, userEmail)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderPost = (p, index) => {
        return (
            <Item className="post">
                <Item.Content verticalAlign='middle'>
                    <Item.Header>post {index + 1}</Item.Header>
                    <Item.Description>{p.content}</Item.Description>
                    <Item.Extra>
                    <Button floated='right' onClick={this.handleView} id={p.id}>View Post</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }

    render() {
        
        if(!this.props.group == []) {
            return this.props.group.map(g => 
                <div>
                    <Header as='h3' block className='form-header'>{g.name}
                        <Modal trigger={<Button className="invite-button" basic color='violet'>Invite</Button>}>
                            <Modal.Header>Invite a Member</Modal.Header>
                            <Form className="account-form" onSubmit={this.handleSubmit}>
                            <Form.Field onSubmit={this.handleSubmit}>
                                <label>Member email: </label>
                                <input placeholder='name' name="email" onChange={this.handleChange} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                            </Form>
                        </Modal>
                    </Header>
                    
                    <div className="group-content-container">
                        <div className="photo-container"> 
                            <Header as='h3' block className='photo-header'> Photos </Header>
                            <Button className="account-button" basic color='violet' onClick={this.handlePhotosClick}> View Photos</Button>
                        </div>

                        <div className="post-container">
                            <Header as='h3' block className='form-header'>
                                <Button className="photo-button" basic color='violet' onClick={this.handleClick}> Create Post</Button>
                            </Header>
                            {this.props.post.map((p, index) => this.renderPost(p, index))}
                        </div>
                    </div> 
                </div>
            )
        }else {
            return <div>Loading...</div>
        }
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        group: state.group,
        post: state.post
    }
}

const mapDispatch = dispatch => {
    return {
        getPost: (groupId) => dispatch(getPost(groupId)),
        createPendingUser: (groupId, userEmail) => dispatch(createPendingUser(groupId, userEmail))
    }
}

export default connect(mapState, mapDispatch)(withRouter(GroupPage))
