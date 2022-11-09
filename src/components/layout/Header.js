import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
const Header = () => {
    return (
        <div className="navbar bg-neutral text-white">
            <div className="flex-1">
                <img className='h-10' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Ghorer Khabar</Link>
            </div>
            <div className="flex-none font-bold">
                <div className='mr-5'><Link to='/services'>Services</Link></div>
                <div className='mr-5'><Link to='/login'>Login</Link></div>
                <div className='mr-5'><Link to='/signUp'>Sign up</Link></div>
                <div className='mr-5'><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    );
};

export default Header;