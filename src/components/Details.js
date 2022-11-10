import React from 'react';
import AddReviews from './AddReviews'
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
const Details = () => {
    const service = useLoaderData();
    const { image, name, price, description, _id } = service;
    const { user } = useContext(AuthContext)

    return (
        <div>

            <div className='p-10 foo'>
                <img className='mx-auto rounded w-full' src={service.image} alt={service.name} />
            </div>
            <h1 className='text-2xl font-semibold'>{service.name}</h1>
            <p className='text-sm mb-5'>Price: {service.price} TK</p>
            <p className='mx-40'>{service.description}</p>
            <Reviews id={_id}></Reviews>

            <div className='my-5'>

                {user?.uid ? <AddReviews service={service} ></AddReviews>

                    :
                    <> <h3>Please login to add a review!</h3>
                        <Link to='/login'> <button >Log In</button> </Link> </>

                }

            </div>


        </div>

    );
};

export default Details;