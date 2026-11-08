import { useState } from 'react';
import AddProjectForm from './components/ProjectForm.jsx';
import ProjectList from './components/ProjectList';
import './App.css';
import './components/project.css';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ]);

  const handleAddProject = (title, description) => {
    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects((currentProjects) => [newProject, ...currentProjects]);
  };

  return (
    <>
      <header className="app-header">
        <h1>Personal Project Showcase App</h1>
      </header>
      <main className="app-container app-main">
        <AddProjectForm onAddProject={handleAddProject} />
        <ProjectList projects={projects} />
      </main>
    </>
  );
}

export default App;