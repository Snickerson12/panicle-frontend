import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Button } from 'semantic-ui-react';


const GroupPage = (props) => {
    console.log(props.group)
    if(!props.group == []) {
        console.log('conditional', props.group)
        return props.group.map(g => 
            <div>
                <Header as='h3' block className='form-header'>{g.name}</Header>
                <div className="group-content-container">
                    <div className="photo-container"> 
                        <Header as='h3' block className='photo-header'> Photos </Header>
                        <Button className="account-button" basic color='violet'> View Photos</Button>
                    </div>
                    <div className="post-container">
                        <Header as='h3' block className='form-header'>
                            <Button className="photo-button" basic color='violet'> Create Post</Button>
                        </Header>
                        <Item className="post">
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>Post One</Item.Header>
                                <Item.Description>description</Item.Description>
                                <Item.Extra>
                                <Button floated='right'>Comment</Button>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item className="post">
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>Post Two</Item.Header>
                                <Item.Description>description</Item.Description>
                                <Item.Extra>
                                <Button floated='right'>Comment</Button>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </div>
                </div> 
            </div>
        )
    }else {
        return <div>Loading...</div>
    }

}

const mapState = (state) => {
    return {
        user: state.user,
        group: state.group
    }
}

export default connect(mapState)(GroupPage)