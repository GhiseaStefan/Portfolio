import React from 'react'
import { InfoContainer, InfoHeader, InfoImage, InfoDesc, InfoHeaderContainer, ResumeContainer, ResumeFrame, ResumeImage, ResumeImageContainer, ResumeTitle } from './AboutStyles';

const About: React.FC = () => {
    return (
        <>
            <InfoContainer>
                <InfoHeaderContainer>
                    <InfoHeader>
                        A bit about me.
                    </InfoHeader>
                    <InfoImage src='/svgs/blue-arrow.svg' />
                </InfoHeaderContainer>
                <InfoDesc>
                    Hello, I'm Stefan, a passionate web developer with a Bachelor's degree in Informatics Economics from Bucharest University of Economic Studies. My aspirations are set on becoming a Full-Stack Web Developer, and I thrive on building complex and engaging web applications using technologies like React, Node.js, Express, and MongoDB.
                </InfoDesc>
            </InfoContainer>
            <ResumeContainer>
                <ResumeTitle>My Resume</ResumeTitle>
                <ResumeFrame>
                    <ResumeImageContainer>
                        <ResumeImage src='/images/CV.jpg' />
                    </ResumeImageContainer>
                </ResumeFrame>
            </ResumeContainer>
        </>
    )
}

export default About