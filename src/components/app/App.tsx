import AppNavbar from "./AppNavbar";

import SectionHero from "../page/Section/SectionHero";
import SectionMain from "../page/Section/SectionMain";
import SectionSlider from "../page/Section/SectionSlider";

import AppFooter from "./AppFooter";

function App() {
    return (
        <>
            <AppNavbar />

            <main>
                <SectionHero />
                <SectionMain />
                <SectionSlider />
            </main>

            <AppFooter />
        </>
    );
}

export default App;
