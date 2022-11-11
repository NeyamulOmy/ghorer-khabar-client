import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../Hooks/useTitle';
const UpdateReview = () => {
    useTitle('Update review')
    const { setreview } = useContext(AuthContext)
    const [reviewId, setReviewId] = useState('')
    const review = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
        const updateReviewText = event.target.updateReviewText.value;
        console.log(updateReviewText)
        console.log(reviewId)
        fetch(`https://ghorer-khabar-server.vercel.app/reviews/update/${reviewId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewText: updateReviewText })
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                if (data.modifiedCount > 0) {
                    alert('Review Updated Successfully!');
                    window.location.replace('/myreview');

                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>{review.serviceName}</h1>
            <form onSubmit={handleUpdate}>
                <textarea name="updateReviewText" id="" cols="100" rows="2" className='border p-3' defaultValue={review.reviewText}></textarea>
                <br />
                <button onClick={() => setReviewId(review._id)} className='btn btn-primary'>
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;