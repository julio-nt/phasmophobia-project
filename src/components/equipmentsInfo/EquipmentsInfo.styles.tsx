import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';

const mainSection = styled(Box)(({ theme }) => ({
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '2rem',
	paddingBottom: '2rem',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

export { mainSection };
