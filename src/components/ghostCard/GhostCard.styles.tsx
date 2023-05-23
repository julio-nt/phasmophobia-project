import { styled } from '@mui/material/styles';
import { Box, Card, Typography, Button } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	paddingTop: '2rem',
	paddingLeft: '4rem',
	paddingRight: '4rem',
	paddingBottom: '2rem',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const cardListContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1rem',
	justifyContent: 'space-between',
}));

const cardContainer = styled(Card)(({ theme }) => ({
	width: '12.5rem',
	height: '12rem',
	position: 'relative',
	backgroundColor: '#2b2b2b',
	color: '#707070',
}));

const evidence = styled(Typography)(({ theme }) => ({
	position: 'absolute',
	top: '60%',
	background: '-webkit-linear-gradient(#828282, #e30f00)',
	backgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	letterSpacing: '1px',
}));

const cardButton = styled(Button)(({ theme }) => ({
	// marginLeft: 'auto',
	// marginRight: 'auto',
	position: 'absolute',
	top: '80%',
	left: '28%',
	background: '-webkit-linear-gradient(#828282, #e30f00)',
	color: 'black',
	fontWeight: 'bold',
	letterSpacing: '2px',
	// backgroundClip: 'text',
	// WebkitTextFillColor: 'transparent',
}));

const filterContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-end',
}));

export {
	mainContainer,
	cardListContainer,
	cardContainer,
	evidence,
	cardButton,
	filterContainer,
};
