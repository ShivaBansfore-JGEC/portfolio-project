import { useSelector } from "react-redux";

const useConfigurations = () => {
    const isDarkTehme = useSelector((store: { configuarations: { isDarkTheme: boolean } }) => store.configuarations.isDarkTheme);
    const classSuffix = isDarkTehme ? 'dark' : 'light';

    return {
        isDarkTehme,
        classSuffix
    }
}

export default useConfigurations;