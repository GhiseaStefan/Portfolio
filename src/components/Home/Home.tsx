import React, { Suspense } from 'react'
import Intro from '../Home/Intro/Intro'
import ScrollingInfo from '../Home/ScrollingInfo/ScrollingInfo';
const About = React.lazy(() => import('./About/About'))
const ProjectsPreview = React.lazy(() => import('./ProjectsPreview/ProjectsPreview'));
const Skills = React.lazy(() => import('./Skills/Skills'));

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            <ScrollingInfo />
            <Suspense fallback={<></>}>
                <Skills />
            </Suspense>
            <Suspense fallback={<></>}>
                <About />
            </Suspense>
            <Suspense fallback={<></>}>
                <ProjectsPreview />
            </Suspense>
        </>
    )
}

export default Home