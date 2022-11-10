import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const MyReview = () => {
    const { user, review, setreview } = useContext(AuthContext)
    const [show, setShow] = useState('');
    const [updateReview, setUpdateReview] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user.email, setreview])

    const handleShow = () => setShow('modal-open');

    const handleClose = () => {
        setShow('');

    }
    const handleStatusUpdate = id => {

        setShow(false);
        fetch(`https://server-six-kappa.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: updateReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(odr => odr._id !== id);
                    const approving = review.find(odr => odr._id === id);
                    approving.message
                        = updateReview

                    const newOrders = [approving, ...remaining];
                    setreview(newOrders);
                    alert('Review Updated Successfully!')

                }
            })
    }

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
        <div>
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
                                    <button className="btn btn-ghost text-2xl" onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} /></button>
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



            <div className={`modal ${show}`}>
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" onClick={handleClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default MyReview;