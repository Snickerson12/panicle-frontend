import React from 'react';
import HomeInfo from './HomeInfo';
import image from '../img/homepage-info.jpg';
import { Button } from 'semantic-ui-react';

const Homepage = () => {

    return(
        <div>
            <div className="homepage-image">
                Create Groups to Post Photos, Updates, and Socialize
            </div>
            <HomeInfo/>
            <div className="white-container">
                <div className="container-content">
                    <a href='/'>
                        <img src={image} className="info-image" alt="people gathered around table"/>
                    </a>
                    <span className="info-data">
                        <h2> Get Started </h2>
                        <h3>Sign up for an account and create a group to get started. Invite members to share photos, posts, and more</h3>
                    </span>
                </div>
            </div>
            <div className="bottom-sign-up">
                <Button className="account-button" basic color='violet'>
                    Create an Account
                </Button>
            </div>
        </div>
    )
}

export default Homepage