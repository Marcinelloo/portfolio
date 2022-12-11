import React from 'react'
import styled from 'styled-components'
import { colors } from '../../common/colors/colors'
import { socialMedialinks } from '../../data/socialmediaLinks'



const SocialLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const SocialLinkElement = styled.div`
    img {
        color: ${colors.orange};
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`

const SocialLinks = () => {

    const handleNavigateToLink = (e: any, link: string) => {
        e.preventDefault();
        (window as any).open(link, '_blank').focus();
    }

    return (
        <SocialLinkWrapper>
            {socialMedialinks.map(socMedLink => <SocialLinkElement>
                <img src={socMedLink.icon}
                    alt={socMedLink.link}
                    onClick={(e) => handleNavigateToLink(e, socMedLink.link)}
                    className='scale'
                />
            </SocialLinkElement>)}
        </SocialLinkWrapper>
    )

}

export default SocialLinks