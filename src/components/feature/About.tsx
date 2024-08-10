import { PAGE_STRINGS } from "@/constants/constants";
import Button from "../reusables/Button";
import { useMemo } from "react";
import useConfigurations from "@/hooks/useConfigurations";

const About = () => {
    const PAGE_CONTENT = useMemo(() => PAGE_STRINGS.ABOUT, []);
    const { isDarkTehme, classSuffix } = useConfigurations();
    return (
        <div className="text-align-center about-section">
            <div>
                <p><span className={`page-title-${classSuffix}`}>{PAGE_CONTENT.title}</span></p>
                <p><span className={`page-sub-title-${classSuffix}`}>{PAGE_CONTENT.subTitle}</span></p>
            </div>
            <div className="about-desc-container">
                <p className={`about-desc desc-${classSuffix}`}>{PAGE_CONTENT.desc1}</p>
                <p className={`about-desc desc-${classSuffix}`}>{PAGE_CONTENT.desc2}</p>
                <p className={`about-desc desc-${classSuffix}`}>{PAGE_CONTENT.desc3}</p>
            </div>
            <Button label="Download Resume" type={isDarkTehme ? 'outline-dark' : 'outline-light'} />
        </div>
    )
}

export default About;