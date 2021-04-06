import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/Header'
import { FooterContainer } from '../containers/Footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [ emailAddress, setEmailAdress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    // check form input elements are valid 
    const isInvalid = password === "" || emailAddress === "";  
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then (() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message);
            });
    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title> Sign in </Form.Title>
                {error && <Form.Error >{error}</Form.Error>}

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
                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected with Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>)
};