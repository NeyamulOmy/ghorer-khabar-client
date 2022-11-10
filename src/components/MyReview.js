import React from 'react';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const MyReview = () => {
    const { user, review, setreview } = useContext(AuthContext)


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user.email, setreview])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
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



    console.log(review)
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {review.map(rev =>
                        <tr key={rev._id}>
                            <td>
                                {rev.serviceName}
                            </td>
                            <td>{rev.reviewText}</td>
                            <td>
                                <button className="btn btn-ghost text-2xl"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button onClick={() => handleDelete(rev._id)} className="btn btn-ghost text-2xl">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;