import React from 'react'
import styled from 'styled-components'
import Footer from '../common/components/Footer'
import Header from '../common/components/Header/Header'
import HomeSection from '../components/PorfolioSection/PortfolioSection'

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
`

interface props {
}

const Portfolio: React.FC<props> = () => {
    return (
        <Wrapper>
            <HomeSection />
        </Wrapper>
    )
}

export default Portfolio