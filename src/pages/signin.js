import React, { useState } from 'react'
import { HeaderContainer } from '../containers/Header'
import { FooterContainer } from '../containers/Footer'
import { Form } from '../components'

export default function Signin() {
    const [ emailAddress, setEmailAdress ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError ] = useState('');

    // check form input elements are valid 
    const isInvalid = password === "" || emailAddress === "";  
    const handleSignIn = (event) => {
        event.preventDefault();
    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title> Sign in </Form.Title>
                {!error && <Form.Error>Error!</Form.Error>}

                <Form.Base onSubmit={handleSignIn}>
                    <Form.Input
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAdress(target.value)} 
                    />
                    <Form.Input
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Form.Submit desable={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>)
};