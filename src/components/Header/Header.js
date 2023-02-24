import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <img src={require('../../img/lws-logo.svg')} alt="logo" className="logo" />
                <div className="flex items-center">
                    <p className="text-white min-w-[50px] font-medium">Home</p>
                    <button className="log-btn btn">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;