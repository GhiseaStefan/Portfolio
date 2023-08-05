import React, { useState } from 'react'
import { Container, Message, SkillImage, SkillImageContainer, SkillsContainer, Title } from './SkillsStyles'

const Skills: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const cards = [
        'Front-end', 'Back-end', 'SoftwareDev1', 'Frameworks', 'Database', 'SoftwareDev2'
    ]

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Container>
            <Title>Skills</Title>
            <Message>Click Next Card!</Message>
            <SkillsContainer>
                {cards.map((c, index) => (
                    <SkillImageContainer currentIndex={currentIndex} key={index} onClick={() => handleCardClick(index)}>
                        <SkillImage src={`/images/SkillCards/${c}.jpg`} />
                    </SkillImageContainer>
                ))}
            </SkillsContainer>
        </Container >
    )
}

export default Skills