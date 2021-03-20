import React from 'react';
import { Container } from 'react-bootstrap';


import Login from './Login';

const LoginLayout = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Login />
            </div>
        </Container>
    )
}

export default LoginLayout;
