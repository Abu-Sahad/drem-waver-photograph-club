import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PakageDetails = () => {
    const { pakageId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {pakageId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default PakageDetails;