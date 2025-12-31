import './Experience.css';

const ExperienceItem = ({ experience }) => {
    return (
        <li>
            <div className="exp">
                {experience.icon && <i className={experience.icon}></i>}
                <p className='exp-role'>{experience.role}</p>
                <p className='exp-date'>{experience.date}</p>
                <p className='exp-des'>
                    {experience.description.map((desc, index) => (
                        <span key={index}>
                            • {desc}
                            {index < experience.description.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        </li>
    );
};

export default ExperienceItem;