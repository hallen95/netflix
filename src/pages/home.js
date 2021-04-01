import React from 'react'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/Footer'
import { JumbotronContainer } from '../containers/Jumbotron'
export default function Home() {
    return(
    <>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>)
}