import React from 'react';
import {Header} from 'semantic-ui-react';
import PendingInviteCard from './PendingInviteCard';


const UserInvitesDisplay = () => {
    return (
        <div>
            <Header as='h3' block className='form-header'> Pending Group Invites </Header>
            <div className='pending-invite-cards'>
                <PendingInviteCard>Pending Invites</PendingInviteCard>
            </div>
        </div>
    )
}

export default UserInvitesDisplay