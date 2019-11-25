import React from 'react';
import { connect } from 'react-redux';
import UserGroupsDisplay from './UserGroupsDisplay';
import UserCard from './UserCard';
import { Grid, Segment, Button} from 'semantic-ui-react';



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
     console.log('user page props', this.props)
     const {isFetching} = this.state;
     return(
         <div> 
             {
                 isFetching ? <div>Loading...</div> : (
                    <div className="user-page-container">
                        <Grid columns='equal'>
                            <Grid.Row stretched>
                            < UserGroupsDisplay/>
                            <Grid.Column width={6}>
                                <Segment>
                                    <UserCard />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>1</Segment>
                                <Segment>2</Segment>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Button className="settings-button" basic color='violet' onClick={this.handleSettings}>Settings</Button>
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
      group: state.group
  }
}

export default connect(mapState)(UserHomepage)