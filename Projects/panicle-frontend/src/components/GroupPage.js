import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Button } from 'semantic-ui-react';
import {getPost} from '../actions/postActions';


class GroupPage extends React.Component {
    
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
                    <Header as='h3' block className='form-header'>{g.name}</Header>
                    
                    <div className="group-content-container">
                        <div className="photo-container"> 
                            <Header as='h3' block className='photo-header'> Photos </Header>
                            <Button className="account-button" basic color='violet'> View Photos</Button>
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
        getPost: (groupId) => dispatch(getPost(groupId))
      }
}

export default connect(mapState, mapDispatch)(GroupPage)