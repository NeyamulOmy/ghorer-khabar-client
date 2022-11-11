// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// const MyReviewDetails = ({ rev, handleDelete, review, setreview }) => {
//     const { customer, message, rating, img, serviceName, _id } = rev
//     const [show, setShow] = useState(false);

//     const [updateReview, setupdateReview] = useState("")

//     const handleReview = event => {
//         event.preventDefault();
//         const form = event.target;
//         const message = form.message.value;
//         setupdateReview(message);
//     }
//     const handleShow = () => setShow(true);

//     const handleClose = () => {
//         setShow(false);

//     }

//     console.log("review", updateReview);

//     const handleStatusUpdate = id => {

//         setShow(false);
//         fetch(`https://server-six-kappa.vercel.app/reviews/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({ message: updateReview })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("data", data);
//                 if (data.modifiedCount > 0) {
//                     const remaining = review.filter(odr => odr._id !== id);
//                     const approving = review.find(odr => odr._id === id);
//                     approving.message
//                         = updateReview

//                     const newOrders = [approving, ...remaining];
//                     setreview(newOrders);
//                     alert('Review Updated Successfully!')

//                 }
//             })
//     }
//     return (
//         <div>

//         </div>
//     );
// };

// export default MyReviewDetails;