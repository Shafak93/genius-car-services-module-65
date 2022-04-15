import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin =() =>{
        navigate('/login')
    }
    // if(user){
    //     navigate('/home')
    // }
    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName : name});
          alert('Updated profile');

          navigate('/home')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    className={agree ? 'text-primary' : 'text-danger'} 
                    onClick={()=>setAgree(!agree)} 
                    type="checkbox" name='terms' 
                    label="Accept terms and condition of genius car." />
                </Form.Group>
                <Button
                disabled={!agree}
                 variant="primary"
                  type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to={'/login'} className='text-danger text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;