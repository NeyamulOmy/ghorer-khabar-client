import React from 'react';
import image from '../sqlVsNoSql.png'
import nodeImage from '../nodeVsJS.png'
import useTitle from '../Hooks/useTitle';
const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Blog</h1>
            <div className='m-10 p-10 px-96 bg-stone-200 rounded-md'>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold'>Difference between SQL and NoSQL</h1>
                    <p className='flex justify-center'><img src={image} alt="" /></p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold'>What is JWT, and how does it work?</h1>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold'>What is the difference between javascript and NodeJS?</h1>
                    <p className='flex justify-center'><img src={nodeImage} alt="" /></p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p>Think of NodeJS as a waiter taking the customer orders while the I/O chefs prepare them in the kitchen. Other systems have multiple chefs, who take a customers order, prepare the meal, clear the table and only then attend to the next customer.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;