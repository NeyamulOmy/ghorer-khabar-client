
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const MyReview = () => {



    const { user, review, setreview } = useContext(AuthContext)


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email, setreview])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rev => rev._id !== id);
                        setreview(remaining);
                    }
                })
        }
    }

    return (
        <div style={{ minHeight: "500px" }}>
            <h1 className='text-center mt-5 font-semibold text-3xl mb-5'>My Reviews</h1>

            {
                review.length ? <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                review.map(rev =>
                                    <tr key={rev._id}>
                                        <td>{rev.serviceName}</td>
                                        <td>{rev.reviewText}</td>
                                        <td><Link to={`../update/${rev._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link> <span className='mx-2'> </span><button onClick={() => handleDelete(rev._id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div> :
                    <h5 className='text-center'>No review posted yet!</h5>
            }
        </div>
    );
};

export default MyReview;