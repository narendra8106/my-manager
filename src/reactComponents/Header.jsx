import React, { useState, useEffect } from 'react';
function Header() {
    return ( 
        <div className="header">
            <div className="logo">MU</div>
            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TODAY OVERVIEW</a></li>
                    <li><a href="#">CHALLENGES</a></li>
                    <li><a href="#">MORE</a></li>
                </ul>
            </div>
            <div className="loginButton">
                <button type="button">LOG IN</button>
            </div>
        </div>
     );
}

export default Header;