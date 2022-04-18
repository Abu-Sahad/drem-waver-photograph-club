import React from 'react'
import notFound from "../../../images/notFound/notfound.jpg"

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>This is not founded</h1>
            <div className='text-center'>
                <img className='w-75' src={notFound} alt="" />
            </div>

        </div>
    );
};

export default NotFound;