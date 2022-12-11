import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { navigationElements } from '../../../data/navigation';
import { colors } from '../../colors/colors';

const moon = require('../../images/moon.png');
const fulFilmentMoon = require('../../images/fulfilment-moon.png');

const LinksWrapper = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
`

const LinkElement = styled.li`
list-style-type: none; 
   a{
        color: black;
        text-decoration: none;

        &:hover {
        color: ${colors.lightblue}
       }
    }
`

const ImageWrapper = styled.img`
width: 18px;
height: 18px;
color: black;
cursor: pointer;
`

interface props {

}


const Navigation: React.FC<props> = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { hash } = useLocation();


    return (
        <LinksWrapper>
            {navigationElements.map(navElement =>
                <LinkElement className='hover-underline-animation'>
                    <a href={navElement.path} style={{
                        color: '/' + hash === navElement.path ? colors.orange : 'black'
                    }}>
                        {navElement.name}</a>
                </LinkElement>)}
            <ImageWrapper src={isDarkMode ? fulFilmentMoon : moon} alt='Moon' onClick={() => setIsDarkMode(prev => !prev)} />
        </LinksWrapper>
    )
}

export default Navigation