import { styled } from '@mui/material';
import { Box, Typography, Paper } from '@mui/material';

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

const title = styled(Typography)(({ theme }) => ({
	background: 'linear-gradient(to bottom, #9b1f1f, #540101)',
	backgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}));

const sectionTitles = styled(Typography)(({ theme }) => ({
	paddingTop: '2rem',
	color: 'white',
	variant: 'h2',
}));

const cardBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1rem',
}));

const card = styled(Paper)(({ theme }) => ({
	width: 'fit-content',
	height: 'fit-content',
	padding: '2rem',
	// background: 'linear-gradient(#610000, #a60000)',
	background: 'linear-gradient(to bottom, #9b1f1f, #540101, #000000)',
	marginTop: '1rem',
}));

const cardText = styled(Typography)(({ theme }) => ({
	background: 'linear-gradient(to right bottom, #ffd4d4, #ffffff)',
	backgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}));

export { mainSection, title, sectionTitles, cardBox, card, cardText };
