import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PakageDetails = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default PakageDetails;