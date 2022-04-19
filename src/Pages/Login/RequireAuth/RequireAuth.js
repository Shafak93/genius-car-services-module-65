import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
       return <div>
            <h3 className='text-danger'>Your email is not varified</h3>
            <h3 className='text-sucess'>Please verify your email</h3>
            <button
        className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}
      >
        Send email verification
      </button>
        </div>
      
    }
    return children;
};

export default RequireAuth;