import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Button, Modal, Form, Image } from 'semantic-ui-react';
import {getPost} from '../actions/postActions';
import { withRouter } from "react-router";
import { createPendingUser } from '../actions/pendingUserActions';
import {getPhoto} from '../actions/photoActions';
import {getSingleGroup} from '../actions/groupActions';
import {Icon} from 'semantic-ui-react'

class GroupPage extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }
    
    handleClick = (event) => {
        event.preventDefault()
        const groupId = this.props.match.params.id
        this.props.history.push(groupId + '/newPost')
    }

    componentDidMount = () => {
        const groupId = this.props.match.params.id
        this.props.getSingleGroup(groupId)
        this.props.getPost(groupId)
        this.props.getPhoto(groupId)
    }

    handleView = (event) => {
        const postId = event.target.id
        const groupId = this.props.match.params.id
        this.props.history.push('/group/' + groupId + '/post/'+ (postId))
    }

    handlePhotosClick = () => {
        const groupId = this.props.match.params.id
        this.props.history.push(groupId + '/photos')
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
        console.log('group page props', this.props)
        if(this.props.group[0]) {
            console.log('group props', this.props.group[0])
            return (
                <div>
                    <Header as='h3' block className='form-header'>{this.props.group[0].name}
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
                            { this.props.photo.length > 0 &&
                                <Image src={`http://localhost:3000${this.props.photo.slice(-1)[0].photo_file}`} className='single-photo'/>
                            }
                            <Button className="account-button" basic color='violet' onClick={this.handlePhotosClick}> View Photos</Button>
                        </div>

                        <div className="post-container">
                            <Header as='h3' block className='form-header'>
                                <Button className="photo-button" basic color='violet' onClick={this.handleClick}> Create Post</Button>
                            </Header>
                            { this.props.post.length > 0 
                            ?
                                this.props.post.map((p, index) => this.renderPost(p, index))
                            :
                                <div className='plus-container' onClick={this.handleClick}><Icon plus className='plus' size='massive'/></div>
                            }
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
        group: state.group.single_group,
        post: state.post,
        photo: state.photo
    }
}

const mapDispatch = dispatch => {
    return {
        getPost: (groupId) => dispatch(getPost(groupId)),
        createPendingUser: (groupId, userEmail) => dispatch(createPendingUser(groupId, userEmail)),
        getPhoto: (groupId) => dispatch(getPhoto(groupId)),
        getSingleGroup: (groupId) => dispatch(getSingleGroup(groupId))
    }
}

export default connect(mapState, mapDispatch)(withRouter(GroupPage))
