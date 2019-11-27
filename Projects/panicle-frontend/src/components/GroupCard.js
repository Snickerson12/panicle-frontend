import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {getPost} from '../actions/postActions';
import {getSingleGroup} from '../actions/groupActions';

class GroupCard extends React.Component {

    handleClick = (event) => {
        event.preventDefault()
        const groupId = event.target.id
        this.props.getPost(groupId)
        this.props.getSingleGroup(groupId)
        this.props.history.push('/group/'+ (groupId))
    }

    render() {
        if(this.props.group) {
            return  this.props.group.map(g => 
              <Segment onClick={this.handleClick} id={g.id}>
                 {g.name} 
              </Segment>
          )  
        } else {return <div>Loading...</div>}
    }
}

const mapState = (state) => {
    return {
        group: state.group
    }
}

const mapDispatch = dispatch => {
    return {
        getPost: (groupId) => dispatch(getPost(groupId)),
        getSingleGroup: (groupId) => dispatch(getSingleGroup(groupId))
      }
}

export default connect(mapState, mapDispatch)(withRouter(GroupCard))
