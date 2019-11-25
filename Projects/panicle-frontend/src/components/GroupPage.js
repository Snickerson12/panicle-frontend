import React from 'react';
import { connect } from 'react-redux'

const GroupPage = (props) => {
    console.log(props)
    return (
        <div>
            text
        </div>
    )

}

const mapState = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapState)(GroupPage)