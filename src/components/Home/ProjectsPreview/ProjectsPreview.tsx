import React from 'react'
import { HeaderContainer, HeaderTitle } from './ProjectsPreviewStyles'
import ProjectPreviewSingle from './ProjectPreviewSingle/ProjectPreviewSingle'

const projects = [
    {
        imageSrc: 'images/Wearzi/Main.png',
        title: 'Wearzi',
        desc: `Basic E-Commerce Website with 2 special features`,
        path: '/project01'
    },
    {
        imageSrc: 'images/Notes/Main.png',
        title: 'Notes',
        desc: `Write, Edit and Delete Notes !`,
        path: '/project02'
    },
    {
        imageSrc: 'images/Thundera/Main.png',
        title: 'Thundera',
        desc: `E-commerce for Techonlogy Items with Stripe Integration`,
        path: '/project03'
    }
]

const ProjectsPreview: React.FC = () => {
    return (
        <>
            <HeaderContainer id='projects-preview'>
                <HeaderTitle >Projects</HeaderTitle>
            </HeaderContainer>
            {projects.map((p, index) => (
                <ProjectPreviewSingle key={index} imageSrc={p.imageSrc} title={p.title} desc={p.desc} path={p.path} />
            ))}
        </>
    )
}

export default ProjectsPreview