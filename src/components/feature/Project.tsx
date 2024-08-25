import { PROJECT_CARDS } from "@/constants/constants";
import useConfigurations from "@/hooks/useConfigurations";
import card_icon_dark from "../../../assets/card_icon_dark.svg";
import card_icon_light from "../../../assets/card_icon_light.svg";
import Card from "../reusables/Card";
const Project = () => {
    const { isDarkTehme, classSuffix } = useConfigurations();
    const cardIcon = isDarkTehme ? card_icon_dark : card_icon_light;
    return (
        <div className="service-section">
            <div>
                <p className={`page-title-${classSuffix} text-align-center`}>Projects</p>
                <p className={`page-sub-title-${classSuffix} text-align-center`}>Explore projects</p>
            </div>
            <div className="is-flex gap-16">
                {PROJECT_CARDS.map(card => (
                    <Card
                        title={card.title}
                        descriptions={card.descriptions}
                        theme={isDarkTehme ? 'dark' : 'light'}
                        imageProps={{
                            src: cardIcon,
                            alt: 'card-img',
                            width: 30,
                            height: 30
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Project;