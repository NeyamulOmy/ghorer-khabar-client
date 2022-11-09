import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>

            <div className='grid grid-cols-3 py-5 gap-2 justify-center'>
                {
                    services.map(service => {
                        return (<div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service.image} alt={service.name} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description.slice(0, 100) + '...'}</p>
                                <p><span className='font-bold'>Price:</span> {service.price} tk</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Services;