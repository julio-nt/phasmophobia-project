import { styled } from '@mui/material/styles';
import { AppBar, Button, MenuItem } from '@mui/material';

const navbar = styled(AppBar)(({ theme }) => ({
	// backgroundColor: '#1f1f1f',
	background: 'linear-gradient(to top, #0a0000, #590000)',
}));

const menuItem = styled(MenuItem)(({ theme }) => ({
	paddingLeft: '1rem',
	paddingRight: '2rem',
	backgroundColor: 'gray',
}));

const menuButtons = styled(Button)(({ theme }) => ({
	// paddingRight: '2rem',
	color: 'white',
	display: 'block',
	borderLeft: '1px solid #610000',
	borderBottom: '1px solid #610000',
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export { navbar, Offset, menuItem, menuButtons };
