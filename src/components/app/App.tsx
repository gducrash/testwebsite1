import AppNavbar from "./AppNavbar";

import SectionHero from "../page/Section/SectionHero";
import SectionMain from "../page/Section/SectionMain";
import SectionScroll from "../page/Section/SectionScroll";

import AppFooter from "./AppFooter";

function App() {
    return (
        <>
            <AppNavbar />

            <main>
                <SectionHero />
                <SectionMain />
                <SectionScroll />
            </main>

            <AppFooter />
        </>
    );
}

export default App;
