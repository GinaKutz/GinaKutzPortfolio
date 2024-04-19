import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
