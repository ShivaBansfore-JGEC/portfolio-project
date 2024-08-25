import useConfigurations from "@/hooks/useConfigurations";
import PageHeader from "../reusables/PageHeader";
import { EXPERIENCE_DETAILS } from "@/constants/constants";
import ExperienceCard from "../reusables/ExperienceCard";

const Experience = () => {
    const { isDarkTehme, classSuffix } = useConfigurations();
    return (
        <div className="experience-section">
            <PageHeader title={'Experience'} subTitle="Most recent experince" classSuffix={classSuffix} />
            <div className="is-flex gap-16 experience-section-card-wrapper ">
                {EXPERIENCE_DETAILS.map(details => (
                    <ExperienceCard {...details} theme={classSuffix} />
                ))}
            </div>
        </div>
    )
}

export default Experience;