import { useParams, Link } from 'react-router-dom';
import BtnGitHub from 'components/btnGitHub/BtnGitHub';
import BtnLink from 'components/btnLink/BtnLink';
import BtnBack from 'components/BtnBack/BtnBack';
import { projects } from 'helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt="{project.title}"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
            <p>
              Description:
              <span className="project-details__desc--lite">
                {project.description}
              </span>
            </p>
          </div>

          <div className="project-details__button-wrapper">
            <BtnLink link={project.link} />
            <BtnGitHub link={project.gitHubLink} />
            <Link to="/projects">
              <BtnBack />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
