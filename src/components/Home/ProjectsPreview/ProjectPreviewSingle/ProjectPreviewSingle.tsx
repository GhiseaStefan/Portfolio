import React from 'react'
import { Image, ImageContainer, ProjectContainer, TextContainer, TextDesc, TextHlink, TextTitle } from './ProjectPreviewSingleStyles'
import { ProjectPreviewSingleProps } from '../../../../interfaces/ComponentsInterfaces'

const ProjectPreviewSingle: React.FC<ProjectPreviewSingleProps> = ({ imageSrc, title, desc, path }) => {

    return (
        <ProjectContainer>
            <ImageContainer>
                <Image src={imageSrc} />
            </ImageContainer>
            <TextContainer>
                <TextTitle>
                    {title}
                </TextTitle>
                <TextDesc>
                    {desc}
                </TextDesc>
                <TextHlink href={path}>
                    View
                </TextHlink>
            </TextContainer>
        </ProjectContainer>
    )
}

export default ProjectPreviewSingle