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

const sectionTitles = styled(Typography)(({ theme }) => ({
	paddingTop: '2rem',
	paddingBottom: '1rem',
}));

const text = styled(Typography)(({ theme }) => ({
	paddingBottom: '.5rem',
	maxWidth: '70rem',
}));

export { mainSection, sectionTitles, text };
