import { render, fireEvent } from '@testing-library/react'
import faqsData from '../../fixtures/fqas.json'
import { Accordion } from '../../components'
import { Item } from '../../components/jumbotron/styles/jumbotron'

describe('<Accordion />', () => {
    it('it renders the <Accordion /> with populated data', () => {
        const { container, getByText } = render(
            <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
        )
    })
})