import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../banner.jpg'
const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <div>
                <img src={banner} className='rounded' alt="" />
            </div>
            <div>
                <p>{services.length}</p>
            </div>
        </div>
    );
};

export default Home;