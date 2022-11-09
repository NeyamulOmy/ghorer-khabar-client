import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    return (
        <div>
            {service.name}
        </div>
    );
};

export default Details;