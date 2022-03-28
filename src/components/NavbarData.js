import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const NavbarData = [
    {
        title: "Home",
        icon : <HomeIcon/>,
        link: "/",
    },
    {
        title: "My Profile",
        icon : <PersonIcon/>,
        link: "/profile",
    },
    {
        title: "My Project",
        icon : <HomeWorkIcon/>,
        link: "/project",
    },
    {
        title: "Contact",
        icon : <PermContactCalendarIcon/>,
        link: "/contact",
    },
]