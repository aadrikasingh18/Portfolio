import './Project.css';

const ProjectItem = ({ project }) => {
    return (
        <li>
            <div className="pro">
                <p className='pro-role'>{project.title}</p>
                <p className='pro-des'>
                    {project.description.map((desc, index) => (
                        <span key={index}>
                            • {desc}
                            {index < project.description.length - 1 && <br />}
                        </span>
                    ))}
                </p>
                {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-light" id="btn">LINK</button>
                    </a>
                )}
                {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-light" id="btn">GITHUB</button>
                    </a>
                )}
            </div>
        </li>
    );
};

export default ProjectItem;