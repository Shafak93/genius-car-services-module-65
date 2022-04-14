import React from 'react';
import notfound from '../../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-danger text-center'>404 Not Found</h1>
            <img className='w-50' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;