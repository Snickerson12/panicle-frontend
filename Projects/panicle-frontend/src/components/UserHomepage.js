import React from 'react';
import { connect } from 'react-redux';
import UserGroupsDisplay from './UserGroupsDisplay';
import UserCard from './UserCard';
import { Grid, Segment} from 'semantic-ui-react';



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

 render() {
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
                    </div>
                 )
             }
        </div>
        )
    }
}

const mapState = (state) => {
    return {
      user: state.user
  }
}

export default connect(mapState)(UserHomepage)