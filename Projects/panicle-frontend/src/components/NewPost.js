import React from 'react';
import { connect } from 'react-redux';
import { Header, Button, Form } from 'semantic-ui-react';
import { newPost } from '../actions/postActions';

class NewPost extends React.Component {
    constructor() {
        super()
        this.state = {
            content: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const user = this.props.user.user.id
        const groupId = Object.values(this.props.group[0])[0]
        const postContent = {content: this.state.content, user_id: user, group_id: groupId}
        await this.props.newPost(postContent)
        this.props.history.push('./group/'+ `${groupId}`)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        const groupId = Object.values(this.props.group[0])[0]
        this.props.history.push('./group/'+ `${groupId}`)
    }

    render() {
        return(
            <div>
                <Button className="settings-back-button" basic color='violet' onClick={this.handleClick}>Back</Button>
                <div>
                    <Header as='h3' block className='form-header'>Create a New Post</Header>
                    <Form className="account-form" onSubmit={this.handleSubmit}>
                        <Form.Field onSubmit={this.handleSubmit}>
                            <label>Post Content: </label>
                            <textarea placeholder='Post' name="content" onChange={this.handleChange} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form> 
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        group: state.group
    }
}

const mapDispatch = dispatch => {
    return {
        newPost: (postContent) => dispatch(newPost(postContent))
    }
}

export default connect(mapState, mapDispatch)(NewPost)