import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import {removePendingInvite, getSinglePending} from '../actions/pendingUserActions';
import {getGroup} from '../actions/groupActions';

class PendingInviteCard extends React.Component {

    handleDelete = (event) => {
        const pendingInviteId = event.target.id
        this.props.removePendingInvite(pendingInviteId)
    }

    handleAccept = async (event) => {
        const pendingInviteId = event.target.id
        await this.props.getSinglePending(pendingInviteId)
    }

    render() {
        if (!this.props.pending_user_group == []) 
            {
                return this.props.pending_user_group.map(g => 
                    <div className='invite-card'>
                      <Card>
                      <Card.Content>
                        <Card.Header>{g.group.name}</Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' onClick={this.handleAccept} id={g.id}>
                            Approve
                          </Button>
                          <Button basic color='red' onClick={this.handleDelete} id={g.id}>
                            Decline
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  </div>
              )  
            } else {return <div>Loading...</div>}
    }
}

const mapState = (state) => {
    return {
        pending_user_group: state.pending_user_group,
        user: state.user
    }
}

const mapDispatch = dispatch => {
    return {
        removePendingInvite: (pendingInviteId) => dispatch(removePendingInvite(pendingInviteId)),
        getSinglePending: (pendingInviteId) => dispatch(getSinglePending(pendingInviteId)),
        getGroup: (user) => dispatch(getGroup(user))
    }
}


export default connect(mapState, mapDispatch)(PendingInviteCard)