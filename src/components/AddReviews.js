import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
const AddReviews = ({ service }) => {
    const { _id, name } = service;
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;
        const customer = user?.displayName;
        const email = user?.email;
        const img = user?.photoURL;


        const review = {
            serviceId: _id,
            serviceName: name,
            customer: customer,
            email,
            reviewText,
            img

        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for your feedback!')
                    event.target.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <h1>Add review!</h1>
            <form onSubmit={handleReview}>
                <div>
                    <textarea className='border' name="reviewText" id="" cols="100" placeholder='write your review here' rows="3"></textarea>
                </div>
                <div>
                    <button className='btn btn-warning' type="submit">Add review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReviews;