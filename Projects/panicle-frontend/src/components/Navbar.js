import React from 'react';

const Navbar = () => {
    return(
        <div>
            <div className="ui secondary pointing menu">
                <a href='/'>
                    <img src='./logo-grey.png' alt='logo'/>
                </a>
                <div className="right menu">
                    <a className="ui item">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar