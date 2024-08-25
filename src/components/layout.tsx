import { useSelector } from "react-redux";
import About from "./feature/About";
import Header from "./feature/Header"
import Hero from "./feature/Hero";
import PROJECT from "./feature/Project";
import Experience from "./feature/Experience";
import Skills from "./feature/Skills";


const Layout = () => {
    const isDarkTehme = useSelector((store: { configuarations: { isDarkTheme: boolean } }) => store.configuarations.isDarkTheme);
    const bgClass = isDarkTehme ? 'bg-dark' : 'bg-light';
    return (
        <div className={`layout-wrapper ${bgClass}`}>
            <Header />
            <div className="layout-wrapper-pages">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <PROJECT />
            </div>
        </div>
    )
}

export default Layout;