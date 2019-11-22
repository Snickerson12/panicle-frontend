import React from 'react';
import { connect } from 'react-redux';
import UserGroupsDisplay from './UserGroupsDisplay';


const UserHomepage = (props) => {
    console.log(props)
    
    // const userData = props.users.map(user => {
    //     return <UserCard user={user}/>
    // })

    return(
        <div>
            < UserGroupsDisplay/>
            {/* {userData} */}
        </div>
    )
}

const mapState = (state) => {
    return {
      user: state.user
  }
}

export default connect(mapState)(UserHomepage)