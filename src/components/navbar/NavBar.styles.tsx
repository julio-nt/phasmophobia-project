import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

const navbar = styled(AppBar)(({ theme }) => ({
	// backgroundColor: '#1f1f1f',
	background: 'linear-gradient(to top, #0a0000, #590000)',
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export { navbar, Offset };
