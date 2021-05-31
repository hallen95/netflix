import { render } from '@testing-library/react'
import { Footer } from '../../components'

describe('<Footer />', () => {
    it('renders the <Footer /> with populated data', () => {
        const { container, getByText } = render( <Footer>
            <Footer.Title> Question? Contact us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem gift cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media center</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookie preferences</Footer.Link>
                    <Footer.Link href="#">Legal notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Argentina</Footer.Text>
        </Footer>)
        expect(getByText('Question? Contact us')).toBeTruthy()
        expect(getByText('FAQ')).toBeTruthy()
        expect(getByText('Investor Relations')).toBeTruthy()
        expect(getByText('Ways to watch')).toBeTruthy()
        expect(getByText('Corporate Information')).toBeTruthy()
        expect(getByText('Netflix Originals')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })
} )