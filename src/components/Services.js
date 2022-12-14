import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../context/AuthProvider';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    const { loading } = useContext(AuthContext)
    if (loading) {
        return (

            <div className="radial-progress" style={{ "--value": 99 }}>99%</div>

        )
    }
    return (
        <div>

            <div className='grid lg:grid-cols-3 py-5 gap-2 justify-center lg:px-40'>
                {
                    services.map(service => {
                        return (<div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                            <PhotoProvider>
                                <figure className="px-10 pt-10">
                                    <PhotoView src={service.image}>
                                        <img src={service.image} alt={service.name} className="rounded-xl" />
                                    </PhotoView>
                                </figure>
                            </PhotoProvider>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description.slice(0, 100) + '...'}</p>
                                <p><span className='font-bold'>Price:</span> {service.price} tk</p>
                                <div className="card-actions">
                                    <Link to={`./${service._id}`}><button className="btn btn-primary">Details</button>
                                    </Link>
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