import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';

const Details = () => {
    const service = useLoaderData();
    return (
        <div>

            <div className='p-10 foo'>
                <img className='mx-auto rounded w-full' src={service.image} alt={service.name} />
            </div>
            <h1 className='text-2xl font-semibold'>{service.name}</h1>
            <p className='text-sm mb-5'>Price: {service.price} TK</p>
            <p className='mx-40'>{service.description}</p>
            <Reviews></Reviews>
            <Link to={`../../addReview/${service._id}`}>
                <button className='btn btn-sm btn-warning'>Add reviews</button>
            </Link>
        </div>

    );
};

export default Details;