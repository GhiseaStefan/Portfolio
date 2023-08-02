import React from 'react'
import Intro from '../Home/Intro/Intro'
import ScrollingInfo from '../Home/ScrollingInfo/ScrollingInfo';
import About from '../Home/About/About';
import ProjectsPreview from '../Home/ProjectsPreview/ProjectsPreview';
import Skills from '../Home/Skills/Skills';

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            <ScrollingInfo />
            <Skills />
            <About />
            <ProjectsPreview />
        </>
    )
}

export default Home