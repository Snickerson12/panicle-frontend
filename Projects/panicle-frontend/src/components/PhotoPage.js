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

    handleSubmit = async (event) => {
        event.preventDefault()
        const groupId = parseInt(this.props.match.params.id)
        const userId = this.props.user.user.id
        const photoData = new FormData()
        photoData.append('photo[user_id]', userId)
        photoData.append('photo[group_id]', groupId)
        photoData.append('photo[caption]', this.state.caption)
        photoData.append('photo[photo_file]', this.state.photo_file)
        await this.props.uploadPhoto(photoData)
        await this.props.getPhoto(groupId)
        this.props.history.push('/group/'+groupId + '/photos')
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
                <Modal trigger={<Button><Image src={`http://localhost:3000${photo.photo_file}`} className='photo-item'/></Button>}>
                    <Modal.Content image className="modal-image">
                        <Image wrapped size='large' src={`http://localhost:3000${photo.photo_file}`}/>
                    </Modal.Content>
                    <Modal.Description className='modal-caption'>
                        {photo.caption}
                    </Modal.Description>
                </Modal>
                <Item.Description className='photo-caption'>
                    {photo.caption}
                </Item.Description>
            </Grid.Column>
        )
    }

    render() {
        console.log(this.props.photo)
        if(this.props.photo.length > 0) {
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
        } else {
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
                </div>
                )
        }
    }
}


const mapState = (state) => {
    return {
        group: state.group.single_group,
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