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
                <Link to='/' className="btn btn-ghost normal-case hidden text-sm lg:text-xl lg:flex">Ghorer Khabar</Link>
            </div>
            <div className="flex-none font-bold">
                <div className=' mr-2 lg:mr-5 text-xs lg:text-base'><Link to='/services'>Services</Link></div>


                {
                    user?.uid ?
                        <>

                            <div className=' mr-2 lg:mr-5'><Link className='text-xs lg:text-base' to='/myreview'>My Reviews </Link></div>
                            <div className=' mr-2 lg:mr-5'><Link className='text-xs lg:text-base' to='/addService'>Add Services</Link></div>
                            <div className=' mr-2 lg:mr-5'> <button onClick={handleLogOut} variant="danger" className='text-xs lg:text-base' >Log out</button>  </div>

                        </>
                        :
                        <>
                            <div className=' mr-2 lg:mr-5'><Link className='text-xs lg:text-base' to='/login'>Login</Link></div>
                            <div className=' mr-2 lg:mr-5'><Link className='text-xs lg:text-base' to='/signUp'>Sign up</Link></div>

                        </>
                }
                {user?.photoURL ?
                    <><div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                        <span className=' hidden text-xs lg:flex lg:text-base'>{user?.displayName}</span> </>
                    : <></>
                }





                <div className='text-xs lg:text-base mr-2 ml-1 lg:ml-5 lg:mr-5'><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    );
};

export default Header;