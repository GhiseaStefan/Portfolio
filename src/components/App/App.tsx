import Home from '../Home/Home';
import Project from '../Project/Project';
import AppLayout from './AppLayout';
import { Routes, Route } from 'react-router-dom';
import projects from '../Project/projects.json';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        {projects.map((project) => (
          <Route path={project.path} element={<Project header={project.header} desc={project.desc} gitPath={project.gitPath} items={project.items} />} />
        ))}
      </Routes>
    </AppLayout>
  )
}

export default App
