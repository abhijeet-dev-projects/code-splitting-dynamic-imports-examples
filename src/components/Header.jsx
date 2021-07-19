import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    );
}

export default Header;
