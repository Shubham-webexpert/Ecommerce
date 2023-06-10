import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { LOGIN_URL, MANAGE_ACCOUNT_URL, PROFILE_URL } from '../../constants/Constants';

export const rightSubmenu=[
    {
        icon:<AccountCircleIcon/>,
        title:"Profile",
        url:PROFILE_URL
    },
    {
        icon:<ManageAccountsIcon/>,
        title:"Manage Account",
        url:MANAGE_ACCOUNT_URL
    },
    {
        icon:<LogoutIcon/>,
        title:"Logout",
        url:LOGIN_URL
    }
]