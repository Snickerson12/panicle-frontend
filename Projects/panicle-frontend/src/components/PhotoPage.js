import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Grid, Image, Modal, Form, Item } from 'semantic-ui-react';
import {uploadPhoto, getPhoto} from '../actions/photoActions';

class PhotoPage extends React.Component {
    constructor() {
        super()
        this.state = {
            caption: '',
            photo_file: null
        }
    }

    componentDidMount = () => {
        const groupId = this.props.match.params.id
        console.log(groupId)
        this.props.getPhoto(groupId)
    }

    handleClick = () => {
        const groupId = this.props.match.params.id
        this.props.history.push('/group/'+groupId)
    }    

    handleSubmit = (event) => {
        event.preventDefault()
        const groupId = this.props.group[0].id
        const userId = this.props.user.user.id
        const photoData = new FormData()
        photoData.append('photo[user_id]', userId)
        photoData.append('photo[group_id]', groupId)
        photoData.append('photo[caption]', this.state.caption)
        photoData.append('photo[photo_file]', this.state.photo_file)
        this.props.uploadPhoto(photoData)
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpload = (event) => {
        event.preventDefault()
        this.setState({photo_file: event.target.files[0]})
    }

    renderImages = (photo, index) => {
        console.log('photo page photo', photo)
        return (
            <Grid.Column>
                <Image src={`http://localhost:3000${photo.photo_file}`} className='photo-item'/>
                <Item.Description className='photo-caption'>
                    {photo.caption}
                </Item.Description>
            </Grid.Column>
        )
    }

    render() {
        return (
            <div>
                <Header as='h3' block className='form-header'>
                    Photos
                </Header> 
                <div className='photo-button-container'>
                    <Button className="photo-buttons" basic color='violet' onClick={this.handleClick}>Back</Button>
                    <Modal trigger={<Button className="photo-buttons" basic color='violet'>Add Photo</Button>}>
                        <Modal.Header>Upload a Photo</Modal.Header>
                        <Form className="account-form" onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Photo: </label>
                            <input type='file' name="photo" onChange={this.handleUpload} />
                        </Form.Field>
                        <Form.Field>
                            <label>Caption: </label>
                            <textarea placeholder='caption' name="caption" onChange={this.handleChange} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                        </Form>
                    </Modal>
                </div>
                <Grid container columns={3}>
                    {this.props.photo.map((photo, index) => this.renderImages(photo, index))}
                </Grid>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        group: state.group,
        user: state.user,
        photo: state.photo
    }
}

const mapDispatch = dispatch => {
    return {
        uploadPhoto: (photoData) => dispatch(uploadPhoto(photoData)),
        getPhoto: (groupId) => dispatch(getPhoto(groupId))
    }
}

export default connect(mapState, mapDispatch)(PhotoPage)