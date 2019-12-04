import React from 'react';
import { connect } from 'react-redux';
import UserGroupsDisplay from './UserGroupsDisplay';
import UserCard from './UserCard';
import { Grid, Segment, Button, Header} from 'semantic-ui-react';
import UserInvitesDisplay from './UserInvitesDisplay';



class UserHomepage extends React.Component {
    constructor() {
        super()
        this.state = {
            isFetching: true
        }
    }
    
    componentDidMount = () => {
        this.setState({
            isFetching: false
        })
    }

    handleSettings = (event) => {
        event.preventDefault();
        this.props.history.push('./settings')
    }

 render() {
     const {isFetching} = this.state;
     console.log(this.props)
     return(
         <div> 
             {
                 isFetching ? <div>Loading...</div> : (
                    <div className="user-page-container">
                        <Grid columns='equal'>
                            <Grid.Row stretched>
                            < UserGroupsDisplay/>
                            <Grid.Column width={6}>
                                <Segment className='middle-section'>
                                    <Header as='h3' block className='form-header'> User Information </Header>
                                    <UserCard />
                                </Segment>
                                <div className='settings-button-container'>
                                    <Button className="settings-button" basic color='violet' onClick={this.handleSettings}>Settings</Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <UserInvitesDisplay/>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                    </div>
                 )
             }
        </div>
        )
    }
}

const mapState = (state) => {
    return {
      user: state.user,
      group: state.group,
      pending_user_group: state.pending_user_group
  }
}

export default connect(mapState)(UserHomepage)