import React from 'react';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
    useTitle("Add service")
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            name,
            image,
            price,
            description
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Succesfully!')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a new item</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">

                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='image' placeholder="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="number" name='price' placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <textarea name="description" id="" cols="100" rows="2" className='p-2 border' placeholder='description'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;