import React from 'react';
import { Segment } from 'semantic-ui-react';
import {connect} from 'react-redux'


const GroupCard = (props) => {
    console.log('group card', props)
    
    // const userData = props.users.map(user => {
    //     return <UserCard user={user}/>
    // })

    return(
        <Segment>
            {props.group.name}
        </Segment>

    )
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapState)(GroupCard)