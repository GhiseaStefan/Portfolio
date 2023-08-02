import React from 'react'
import { Container, Content, ContentText, ContentDot } from './ScrollingInfoStyles'

const ScrollingInfo: React.FC = () => {
    const contentSets: JSX.Element[] = [];

    for (let i = 0; i < 2; i++) {
        contentSets.push(
            <Content>
                <ContentText>React</ContentText>
                <ContentDot />
                <ContentText>Node</ContentText>
                <ContentDot />
                <ContentText>Express</ContentText>
                <ContentDot />
                <ContentText>MongoDB</ContentText>
                <ContentDot />
                <ContentText>React</ContentText>
                <ContentDot />
                <ContentText>Node</ContentText>
                <ContentDot />
                <ContentText>Express</ContentText>
                <ContentDot />
                <ContentText>MongoDB</ContentText>
                <ContentDot />
            </Content>
        );
    }

    return (
        <Container>
            {contentSets}
        </Container>
    )
}

export default ScrollingInfo