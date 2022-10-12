import React from 'react';
import CartDetails from '../CartDetails/CartDetails';

const Cart = ({ loader }) => {
    const { data } = loader;
    return (
        <div className='flex flex-col md:flex-row'>
            {
                data.map(data => <CartDetails key={data.id} data={data}></CartDetails>)
            }
        </div>
    );
};

export default Cart;