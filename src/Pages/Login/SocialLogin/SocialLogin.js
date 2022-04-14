import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook-svg.svg'
import github from '../../../images/social/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img className='w-25' src={google} alt="" />
                    <span className='px-4'>Google Signin</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img className='w-25' src={facebook} alt="" />
                    <span className='px-4'>Facebook Signin</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50'>
                    <img className='w-25' src={github} alt="" />
                    <span className='px-4'>Github Signin</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;