import React from 'react';
import { connect } from 'react-redux';
import {getSinglePost, removePost} from '../actions/postActions';
import { Container, Button } from 'semantic-ui-react';
import UserComment from './UserComment';


class ViewPost extends React.Component {

    componentDidMount = () => {
        const postId = this.props.match.params.id
        this.props.getSinglePost(postId)
    }

    handleClick = () => {
        const groupId = Object.values(this.props.group[0])[0]
        this.props.history.push('/group/'+groupId)
    }

    handleDelete = async () => {
        const post = this.props.post[0].id
        const groupId = Object.values(this.props.group[0])[0]
        await this.props.removePost(post)
        this.props.history.push('/group/'+groupId)
    }

    renderPost = (p) => {
        return (
            <div className='view-page-container'>
                <div className="view-buttons">
                    <Button className="back-button" basic color='violet' onClick={this.handleClick} >Back</Button>
                    { this.props.user.user.id === this.props.post[0].user_id 
                        &&
                    <Button className="delete-button" basic color='violet' onClick={this.handleDelete}>Delete</Button>
                    }
                </div>
                <Container className="selected-post-container">
                    <div className="post-content">
                        {p.content}
                    </div>
                </Container>
                <UserComment/>
            </div>
        )
    }

    render() {
        if(!this.props.post == []) {
            return(
                <div>
                {this.props.post.map((p) => this.renderPost(p))}
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapState = (state) => {
    return {
        post: state.post,
        group: state.group,
        user: state.user
    }
}

const mapDispatch = dispatch => {
    return {
        getSinglePost: (postId) => dispatch(getSinglePost(postId)),
        removePost: (post) => dispatch(removePost(post))
    }
}

export default connect(mapState, mapDispatch)(ViewPost)
