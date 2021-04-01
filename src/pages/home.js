import React from 'react'
import { Feature, OptForm } from '../components'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/Header'
import { FooterContainer } from '../containers/Footer'
import { JumbotronContainer } from '../containers/Jumbotron'

export default function Home() {
    return(
    <>
        <HeaderContainer>
            <Feature>
                <Feature.Title> Unlimited films, TV programmes and more</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email adress" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>)
}