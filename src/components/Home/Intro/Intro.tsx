import React, { useState, useEffect } from 'react'
import { IntroContainer, InfoContainer, ImageContainer, InfoHeader, InfoDesc, InfoBtn, InfoBtnOverlay, InfoBtnText, ImageProfile } from './IntroStyles'


const Intro: React.FC = () => {
    const [mounted, setMounted] = useState<Boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <IntroContainer>
            <InfoContainer mounted={mounted}>
                <InfoHeader>I'm a full-stack web developer</InfoHeader>
                <InfoDesc>I specialize in web development using the MERN stack – MongoDB, Express, React, and Node.js – to build dynamic and efficient web applications.</InfoDesc>
                <InfoBtn href='mailto:ghiseastefan@gmail.com'>
                    <InfoBtnText>Contact Me</InfoBtnText>
                    <InfoBtnOverlay />
                </InfoBtn>
            </InfoContainer>
            <ImageContainer mounted={mounted}>
                <ImageProfile src='/images/profile-picture.png' />
            </ImageContainer>
        </IntroContainer>
    )
}

export default Intro