import React from 'react'
import { HeaderContainer, HeaderTitle } from './ProjectsPreviewStyles'
import ProjectPreviewSingle from './ProjectPreviewSingle/ProjectPreviewSingle'

const projects = [
    {
        imageSrc: 'images/Wearzi/Main.png',
        title: 'Clothing eCommerce with AI Recommendation',
        desc: `This (MERN Stack) website uses a machine learning model to allow customers to upload images of clothing items. The model analyzes the images and suggests suitable products, streamlining the shopping process and saving customers' time. Additionally, by integrating an advanced natural language processing model into the site's search function, it enhances understanding of the customer's context and intent, providing more relevant search results and improving the efficiency and satisfaction of the user shopping experience.`,
        path: '/project01'
    },
    {
        imageSrc: 'images/Notes/Main.png',
        title: 'Notes',
        desc: `With the help of this website (MERN Stack), you can enjoy the flexibility of organizing your notes in folders, allowing you to structure and group your thoughts and information according to your preferences. Each folder acts as a container, enabling you to keep related notes together, making it easier to find and access them when needed.`,
        path: '/project02'
    },
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