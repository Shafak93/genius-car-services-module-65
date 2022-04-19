import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook-svg.svg'
import github from '../../../images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;
      if(loading ||loading1 || loading2){
        return <Loading></Loading>
    }
    if (error || error1 || error2) {
        errorElement = ''
        errorElement =  <div>
            <p className='text-danger text-center'>Error: {error?.message} {error1?.message} {error2?.message}</p>
          </div>
      }

      if(user || user1 || user2){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
            {errorElement}
                <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img className='w-25' src={google} alt="" />
                    <span className='px-4'>Google Signin</span>
                </button>
                
                <button 
                onClick={()=>signInWithFacebook()}
                className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img className='w-25' src={facebook} alt="" />
                    <span className='px-4'>Facebook Signin</span>
                </button>
                <button 
                onClick={()=>signInWithGithub()}
                className='btn btn-info d-block mx-auto w-50'>
                    <img className='w-25' src={github} alt="" />
                    <span className='px-4'>Github Signin</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;