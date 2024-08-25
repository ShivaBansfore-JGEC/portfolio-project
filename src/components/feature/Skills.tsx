import { SKILLS } from "@/constants/constants";
import ImageComponent from "../reusables/ImageComponent";
import PageHeader from "../reusables/PageHeader";
import useConfigurations from "@/hooks/useConfigurations";


const Skills = () => {
    const { isDarkTehme, classSuffix } = useConfigurations();
    return (
        <div className="skills-sections">
            <PageHeader title={'Skils'} subTitle="Things i know" classSuffix={classSuffix} />
            <div className="skills-sections-items">
                {SKILLS.map(data => (
                    <div className={`skill-container-box skill-container-box-${classSuffix}`}>
                        <ImageComponent width={30} height={30} src={data.icon} alt="skill-icon" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Skills;