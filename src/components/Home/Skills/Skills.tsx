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
            <Message>Click Me!</Message>
            <SkillsContainer>
                {cards.map((c, index) => (
                    <SkillImageContainer key={index} style={{ transform: `translate(calc(${(currentIndex) * -340}px - 50%), -50%)` }} onClick={() => handleCardClick(index)}>
                        <SkillImage src={`/images/SkillCards/${c}.jpg`} />
                    </SkillImageContainer>
                ))}
            </SkillsContainer>
        </Container >
    )
}

export default Skills