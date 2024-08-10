import Image from 'next/image';
import hero_bg_dark from "../../../assets/hero_bg_dark.svg";
import hero_bg_light from "../../../assets/hero_bg_light.svg";
import avatar from "../../../assets/avatar.svg";
import { PAGE_STRINGS } from '@/constants/constants';
import Button from '../reusables/Button';
import useConfigurations from '@/hooks/useConfigurations';

const Hero = () => {
    const { isDarkTehme, classSuffix } = useConfigurations();
    const renderHeroSectionContent = () => {
        return (
            <div className='hero-section-content'>
                <Image
                    src={avatar}
                    alt='avatar' />
                <div className='mg-top-50'>
                    <p className={`text-align-center poppins hero-heading-${classSuffix}`}>{PAGE_STRINGS.name}</p>
                    <p className={`text-align-center hero-gradient-sub-heading-${classSuffix}`}>{PAGE_STRINGS.gradientSubHeading}</p>
                    <p className={`hero-desc-${classSuffix}`}>{PAGE_STRINGS.hero_descriptions}</p>
                    <div>
                    </div>
                </div>
                <div className='mg-top-50'>
                    <Button label='Contact Me' type={isDarkTehme ? 'outline-dark' : 'outline-light'} />
                </div>
            </div>
        )
    }

    return (
        <div className='hero-section'>
            <Image
                src={isDarkTehme ? hero_bg_dark : hero_bg_light}
                alt="hero_bg"
            />
            {renderHeroSectionContent()}
        </div>
    )
}

export default Hero;