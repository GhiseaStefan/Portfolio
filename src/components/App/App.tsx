import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AppLayout from './AppLayout';
import projects from '../Project/projects.json';

const Project = React.lazy(() => import('../Project/Project'))

const App: React.FC = () => {
  return (
    <AppLayout>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Home />} />
          {projects.map((project) => (
            <Route path={project.path} element={<Project header={project.header} desc={project.desc} gitPath={project.gitPath} items={project.items} />} />
          ))}
        </Routes>
      </Suspense>
    </AppLayout>
  )
}

export default App
