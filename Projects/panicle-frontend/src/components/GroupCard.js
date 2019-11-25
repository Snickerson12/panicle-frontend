import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class GroupCard extends React.Component {

    handleClick = (event) => {
        event.preventDefault()
        const groupId = event.target.id
        console.log('handleclick', this.props.group)
        this.props.history.push('/group/'+ (groupId))
    }

    render() {
        console.log('group card props', this.props)
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

export default connect(mapState)(withRouter(GroupCard))
