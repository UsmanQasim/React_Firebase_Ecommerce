import React from 'react';
import { Container } from 'react-bootstrap';

import Signup from './Signup';

const SignupLayout = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
            </div>
        </Container>
    )
}

export default SignupLayout
