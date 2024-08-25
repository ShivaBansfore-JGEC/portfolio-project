
interface experienceProps {
    companyDetails: any,
    roleDescriptions: any,
    duration: string,
    theme: string
}

const ExperienceCard = (props: experienceProps) => {
    const { companyDetails, roleDescriptions, duration, theme } = props || {};

    const renderCompanyName = () => {
        return <div className="company-details">
            {companyDetails.companyName && <p className="company-name-text">{companyDetails.companyName}</p>}
            {companyDetails.desc && <p>{companyDetails.desc}</p>}
        </div>
    }

    const renderRoleAndDescriptions = () => {
        return <div>
            <p className="experiece-card-heading">{roleDescriptions.role}</p>
            {roleDescriptions?.descriptions && <ul className="role-description-ul">
                {roleDescriptions?.descriptions.map((desc: string) => (
                    <li>{desc}</li>
                ))}
            </ul>}
        </div>
    }

    const renderDuration = () => {
        return <p className="text-align-right work-duration">{duration}</p>
    }

    return (
        <div className={`experiece-card experience-card-${theme}`}>
            {renderCompanyName()}
            {renderRoleAndDescriptions()}
            {renderDuration()}
        </div>
    )
}

export default ExperienceCard;