import React, { useRef } from 'react'
import * as B from 'react-bootstrap';
import '../styles/Login.css';
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    return (
        <>
            <B.Card className="text-center " border="primary">
                <B.Card.Body>
                    <B.Card.Title>LOGIN</B.Card.Title>
                    <B.Card.Subtitle className="mb-3 text-muted">Welcome Back</B.Card.Subtitle>
                </B.Card.Body>
                <B.Form className="d-flex justify-content-center align-items-center flex-column">
                    <B.Form.Group id="email">
                        <B.Form.Label>Email</B.Form.Label>
                        <B.Form.Control type="email" required ref={emailRef} style={{ width: '350px' }} />
                    </B.Form.Group>
                    <B.Form.Group id="password">
                        <B.Form.Label>Password</B.Form.Label>
                        <B.Form.Control type="password" required ref={passRef}
                            style={{ width: '350px' }} />
                    </B.Form.Group>
                    <B.Button className="mb-4" style={{ width: '200px' }}>Proceed</B.Button>
                    <B.Container className="mb-2 d-flex justify-content-around">
                        <AiFillFacebook onClick={() => { console.log('Fb Seinng') }} style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                        <FcGoogle onClick={() => { console.log('Googingworking') }} style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                        <AiFillTwitterCircle onClick={() => { console.log('twitty working') }} style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                    </B.Container>
                </B.Form>
            </B.Card>
            <div className="w-100 text-center mt-2">
                Not Signed Up ?
                <Link to='/'>SignUp</Link>
            </div>
            <div style={{ backgroundColor: 'red' }}>
            </div>
        </>
    )
}

export default Login
