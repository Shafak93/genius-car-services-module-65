import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      //going to redirected page
      if(user){
        navigate(from, { replace: true });
        // navigate('/home')
    }
    if(error){
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister =()=>{
        navigate('/register')
    }

    const forgetPasswordReset = async ()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
            </Form>
            <p>New to Genius Car? <Link to={'/register'} className='text-primary text-decoration-none' onClick={navigateRegister}>Register Now</Link> </p>
            <p>Forget password ? <Link to={'/register'} className='text-primary text-decoration-none' onClick={forgetPasswordReset}>Reset password</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;