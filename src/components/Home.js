import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../banner.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../Hooks/useTitle';
const Home = () => {
    useTitle("Home")
    const services = useLoaderData();
    return (
        <div>
            <div>
                <img src={banner} className='rounded' alt="" />
            </div>
            <div className='flex flex-col gap-3 lg:flex-row justify-evenly py-5'>
                {
                    services.map(service => {
                        return (

                            <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                                <PhotoProvider>
                                    <div className="px-10 pt-10">
                                        <PhotoView src={service.image}>
                                            <img src={service.image} alt={service.name} className="rounded-xl" />
                                        </PhotoView>
                                    </div>
                                </PhotoProvider>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>{service.description.slice(0, 100) + '...'}</p>
                                    <p><span className='font-bold'>Price:</span> {service.price} tk</p>
                                    <div className="card-actions">
                                        <Link to={`/services/${service._id}`}>
                                            <button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div>
                <Link to='/services' className="btn btn-accent">See all</Link>
            </div>
            <div className='m-10'>
                <h1 className='text-4xl font-semibold'>About Ghorer Khabar</h1>
                <hr />
                <p className='mx-auto my-5'>
                    Ghorer Khabar was founded by Md. Neyamul Haque in 2021. It is a home kitchen. Md. Neyamul Haque is the one and only chef here. He is highly skilled and won multiple awards for his cooking skills.
                </p>
            </div>
            <div className='m-10'>
                <h1 className='text-3xl font-semibold'>Contact for hire</h1>
                <hr />
                <p className='mx-auto my-5'>E-mail us at <strong>ghorerkhabar@gmail.com</strong> to hire the chef for your events and functions.</p>
            </div>
        </div>
    );
};

export default Home;