import strings from "../../util/strings";
import Navbar from "../page/Navbar/Navbar";

const AppNavbar = () => {
    return (
        <Navbar menuItems={[
            { title: strings.navbar.HOME,    href: '#home', selected: true },
            { title: strings.navbar.MISSION, href: '#mission' },
            { title: strings.navbar.PLACES,  href: '#places' },
            { title: strings.navbar.TEAM,    href: '#team' }
        ]}
        button={strings.NAVBAR_BUTTON} />
    )
}

export default AppNavbar;