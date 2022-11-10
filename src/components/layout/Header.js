import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-neutral text-white">
            <div className="flex-1">
                <img className='h-10' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Ghorer Khabar</Link>
            </div>
            <div className="flex-none font-bold">
                <div className='mr-5'><Link to='/services'>Services</Link></div>


                {
                    user?.uid ?
                        <>

                            <div className='mr-5'><Link to='/myreview'>My Reviews </Link></div>
                            <div className='mr-5'><Link to='/addService'>Add Services</Link></div>
                            <div className='mr-5'> <button onClick={handleLogOut} variant="danger">Log out</button>  </div>

                        </>
                        :
                        <>
                            <div className='mr-5'><Link to='/login'>Login</Link></div>
                            <div className='mr-5'><Link to='/signUp'>Sign up</Link></div>

                        </>
                }
                {user?.photoURL ?
                    <><div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                        {user?.displayName} </>
                    : <></>
                }





                <div className='ml-5 mr-5'><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    );
};

export default Header;