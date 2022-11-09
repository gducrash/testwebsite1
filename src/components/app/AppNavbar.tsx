import strings from "../../util/strings";
import Navbar from "../page/Navbar/Navbar";

const AppNavbar = () => {
    return (
        <Navbar menuItems={[
            { title: strings.navbar.HOME,    href: '#', selected: true },
            { title: strings.navbar.MISSION, href: '#' },
            { title: strings.navbar.PLACES,  href: '#' },
            { title: strings.navbar.TEAM,    href: '#' }
        ]}
        button={strings.NAVBAR_BUTTON} />
    )
}

export default AppNavbar;