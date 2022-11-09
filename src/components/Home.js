import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../banner.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <div>
                <img src={banner} className='rounded' alt="" />
            </div>
            <div className='flex flex-row justify-evenly py-5'>
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
        </div>
    );
};

export default Home;