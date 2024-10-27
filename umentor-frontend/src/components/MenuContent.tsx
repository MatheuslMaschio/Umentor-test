import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useLocation, useNavigate } from 'react-router-dom';

const mainListItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, route: '/usuarios' },
];

export default function MenuContent() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigation(route: string) {
        navigate(route);
    }

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={location.pathname === item.route}
                            onClick={() => handleNavigation(item.route)}
                            sx={{
                                '&:hover': {
                                    '& .MuiListItemText-primary': {
                                        color: 'primary.main', 
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: 'primary.main',  
                                    },
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{ color: location.pathname === item.route ? 'primary.main' : 'text.primary', }}

                            >{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ color: location.pathname === item.route ? 'primary.main' : 'text.primary', }}

                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Stack>
    );
}