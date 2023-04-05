import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

const navbar = styled(AppBar)(({ theme }) => ({
	backgroundColor: '#1f1f1f',
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export { navbar, Offset };
