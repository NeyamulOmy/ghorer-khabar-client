import React from 'react';
import { useState, useEffect } from 'react';
const Reviews = ({ id }) => {
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [id]);

    console.log(review)
    return (
        <div>
            {
                review.length ? review.map(rev =>
                    <div className='border p-5 rounded' key={rev._id}>
                        <div className='flex align-middle'>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={rev.img} alt="" />
                                </div>
                            </div>
                            <h1 className='text-left text-sm font-semibold pt-3 ml-1'>{rev.customer}
                                <span className='ml-2 text-xs text-yellow-800'>{rev.email}</span>
                            </h1></div>
                        <p className='text-left text-2xl'>{rev.reviewText}</p>
                    </div>) :
                    <> <p className='text-center text-3xl text-rose-500'>No Reviews posted yet!</p> </>


            }
        </div>
    );
};

export default Reviews;