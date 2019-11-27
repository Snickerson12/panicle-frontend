import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Grid, Image } from 'semantic-ui-react'

class PhotoPage extends React.Component {

    handleClick = () => {
        console.log('clicked', this.props)
        const groupId = this.props.match.params.id
        this.props.history.push('/group/'+groupId)
    }    

    render() {
        return (
            <div>
                <Header as='h3' block className='form-header'>
                    Photos
                    <Button className="settings-back-button" basic color='violet' onClick={this.handleClick}>Back</Button>
                </Header> 
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        group: state.group
    }
}

export default connect(mapState)(PhotoPage)