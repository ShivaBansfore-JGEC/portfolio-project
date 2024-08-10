import { PAGES } from "@/constants/constants";
import Button from "../reusables/Button";
import Image from 'next/image';
import dark_theme_icon from "../../../assets/dark_theme_icon.svg";
import light_theme_icon from "../../../assets/light_theme_icon.svg";
import { useDispatch } from "react-redux";
import { updateTheme } from "@/store/slices/ConfigSlice";
import useConfigurations from "@/hooks/useConfigurations";

export const Header = () => {
    const dispatch = useDispatch()
    const { isDarkTehme } = useConfigurations();
    const changeTheme = () => {
        dispatch(updateTheme());
    }

    return (
        <div className="section-header">
            <p className={`${isDarkTehme ? 'text-white' : 'text-black'} oleo-scripts`}>Shiva Bansfore</p>
            <ul className="section-header-menu">
                {PAGES.map((page: any) => (
                    <li className={isDarkTehme ? 'menu-text-dark' : 'menu-text-light'} key={page.id}>{page.label}</li>
                ))}
            </ul>
            <Button type={isDarkTehme ? 'outline-dark' : 'outline-light'} label="Contact Me" />
            <Image
                src={isDarkTehme ? dark_theme_icon : light_theme_icon}
                width={30}
                height={50}
                alt="thme icon"
                onClick={changeTheme}
                className="cursor-pointer"
            />
        </div>
    )
}

export default Header;