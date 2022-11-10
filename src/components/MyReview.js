import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const MyReview = () => {
    const { user, review, setreview } = useContext(AuthContext)
    const [show, setShow] = useState('');
    const [updateReview, setUpdateReview] = useState("")
    const [modalReview, setModalReview] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user.email, setreview])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        setUpdateReview(message);
    }
    const handleShow = (rev) => {
        const { reviewText } = rev;

        setModalReview({ reviewText })
        setShow('modal-open');

        console.log(modalReview)
    }

    const handleClose = () => {
        setShow('');

    }
    const handleStatusUpdate = id => {

        setShow('');
        fetch(`https://localhost:5000/reviews/${id}`, {
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
                                    <button className="btn btn-ghost text-2xl" onClick={() => handleShow(rev)}><FontAwesomeIcon icon={faPenToSquare} /></button>
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
                    <form onSubmit={handleReview}>
                        <div>
                            <textarea className='border p-5' name="reviewText" id="" cols="50" placeholder='write your review here' defaultValue={modalReview.reviewText} rows="3"></textarea>

                        </div>
                        <div>
                            <button className='btn btn-warning' type="submit">Add review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;