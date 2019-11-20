import React from 'react';
import { Icon } from 'semantic-ui-react';

const HomeInfo = () => {
    return(
        <div className="info-items">
            <div className="ui card">
                <div className="content">
                    <div className="center aligned description">
                        <p>Create groups and invite members to stay up-to-date</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <Icon name="users" size="huge"/>
                    </div>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="center aligned description">
                        <p>Post updates and happenings for other members to view</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <Icon name="write" size="huge"/>
                    </div>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="center aligned description">
                        <p>Upload photos to share within your private group</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <Icon name="photo" size="huge"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo