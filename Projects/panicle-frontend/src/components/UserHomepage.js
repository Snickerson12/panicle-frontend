import React from 'react';
import UserCard from './UserCard';


const UserHomepage = (props) => {
    console.log(props)
    
    // const userData = props.users.map(user => {
    //     return <UserCard user={user}/>
    // })

    return(
        <div>
            user homepage text
            {/* {userData} */}
        </div>
    )
}

export default UserHomepage