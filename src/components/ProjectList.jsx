import { useState } from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');

  const query = searchTerm.trim().toLowerCase();
  const filteredProjects = projects.filter(({ title, description }) =>
    `${title} ${description}`.toLowerCase().includes(query)
  );

  return (
    <section className="card list-section">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search Projects"
        />
      </div>
      
      <div className="projects-wrapper">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        ) : (
          <p className="no-results">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default ProjectList;