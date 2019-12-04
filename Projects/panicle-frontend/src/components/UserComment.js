import React from 'react';
import { connect } from 'react-redux';
import { Comment, Form, Header, Button } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { newComment, getComments } from'../actions/commentActions';

class UserComment extends React.Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
    }

    componentDidMount = () => {
        const postId = parseInt(this.props.match.params.id)
        this.props.getComments(postId)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.user.user.id
        const post = Object.values(this.props.post[0])[0]
        const comment = {user_id: user, post_id: post, content: this.state.content}
        this.props.newComment(comment)        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderComments = (c) => {        
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>{c.user.username}</Comment.Author>
                    <Comment.Text>
                        {c.content}
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        )
    }

    render() {
        if(!this.props.comment == []) {
            return(
                <div className='parent-comment-container'>
                    <Comment.Group className='comment-container'>
                        <Header as='h3' dividing>Comments</Header>
                        {this.props.comment.map((c) => this.renderComments(c))}
                        <Form reply onSubmit={this.handleSubmit}>
                            <Form.TextArea name='content' onChange={this.handleChange} />
                            <Button type='submit' content='Comment' labelPosition='left' icon='edit' primary />
                        </Form>
                    </Comment.Group>

                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }

}

const mapState = (state) => {
    return {
      user: state.user,
      post: state.post,
      comment: state.comment
    }
}

const mapDispatch = dispatch => {
    return {
        newComment: (comment) => dispatch(newComment(comment)),
        getComments: (postId) => dispatch(getComments(postId))      }
}

export default connect(mapState, mapDispatch)(withRouter(UserComment))
