import Project from 'components/project/Project';
import { projects } from 'helpers/projectsList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(({ id, title, img }) => (
            <Project key={id} title={title} img={img} index={id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
