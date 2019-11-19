import React from 'react'

const UserCard = (props) => {
    console.log(props)
    return(
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="header">{props.user.username}</div>
                    <div className="meta">{props.user.location}</div>
                    <div className="description">{props.user.bio}</div>
                </div>
            </div>
        </div>
    )
}

export default UserCard