import React from 'react'
import { InfoContainer, InfoHeaderContainer, InfoHeader, InfoDesc, VideoContainer, InfoProjectGit, InfoDescGitWrapper, VideoWrapper } from './ProjectStyles'
import { ProjectProps } from '../../interfaces/ComponentsInterfaces'
import ReactPlayer from 'react-player/file'

const Project: React.FC<ProjectProps> = ({ header, desc, gitPath, videoUrl }) => {
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
            <VideoContainer>
                <VideoWrapper>
                    <ReactPlayer url={videoUrl} controls={true} width='100%' height='100%' />
                </VideoWrapper>
            </VideoContainer>
        </>
    )
}

export default Project