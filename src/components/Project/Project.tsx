import React from 'react'
import { InfoContainer, InfoHeaderContainer, InfoHeader, InfoDesc, ItemsContainer, Item, ItemText, ItemImageContainer, ItemImage, InfoProjectGit, InfoDescGitWrapper } from './ProjectStyles'
import { ProjectProps } from '../../interfaces/ComponentsInterfaces'

const Project: React.FC<ProjectProps> = ({ header, desc, gitPath, items }) => {
    return (
        <>
            <InfoContainer>
                <InfoHeaderContainer>
                    <InfoHeader>
                        {header}
                    </InfoHeader>
                </InfoHeaderContainer>
                <InfoDescGitWrapper>
                    <InfoDesc>
                        {desc}
                    </InfoDesc>
                    <InfoProjectGit href={gitPath} target='_blank'>View Project Git</InfoProjectGit>
                </InfoDescGitWrapper>
            </InfoContainer>
            <ItemsContainer>
                {items.map((item, index) => (
                    <Item key={index}>
                        <ItemImageContainer>
                            <ItemText>{item.text}</ItemText>
                            <ItemImage src={item.src} />
                        </ItemImageContainer>
                    </Item>
                ))}
            </ItemsContainer>
        </>
    )
}

export default Project