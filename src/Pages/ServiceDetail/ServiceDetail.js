import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is service detail {serviceId}</h1>
            <Link  to='/checkout'>
                <button className='btn btn-primary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;