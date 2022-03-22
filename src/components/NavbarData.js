import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const NavbarData = [
    {
        title: "Home",
        icon : <HomeIcon/>,
        link: "/",
    },
    {
        title: "About",
        icon : <InfoIcon/>,
        link: "/about",
    },
    {
        title: "My Profile",
        icon : <PersonIcon/>,
        link: "/profile",
    },
    {
        title: "Contact",
        icon : <PermContactCalendarIcon/>,
        link: "/contact",
    },
]