import React from 'react';
import { Link } from 'react-router-dom';

const CartDetails = ({ data }) => {

    const { name, logo, id } = data
    return (
        <div>
            <div className="card md:mx-9 my-20 md:w-9/12 mx-auto w-7/12 bg-base-100 shadow-xl">
                <figure><img className='bg-black' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions ">
                        <Link to={`/quizdetails/${id}`}><button className="btn btn-primary">Start Practice</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;