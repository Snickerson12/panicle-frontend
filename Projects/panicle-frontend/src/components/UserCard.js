import React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import image from '../img/default-photo.jpg';


const UserCard = (props) => {

    if(props.user.user !== undefined) {
        return(
            <div className="ui cards">
                <Item className='user-item'>
                    <Item.Image size='small' src={image} />
    
                    <Item.Content className="user-card-content">
                        <Item.Header>{props.user.user.username}</Item.Header>
                        <Item.Meta>
                        <span>{props.user.user.location}</span>
                        </Item.Meta>
                        <Item.Description>{props.user.user.bio}</Item.Description>
                    </Item.Content>
                </Item>
            </div>
        )
    } else {
        console.log('page loading', props)
        return <div>Loading...</div>
    }
}

const mapState = (state) => {
    return {
      user: state.user
  }
}

export default connect(mapState)(UserCard)