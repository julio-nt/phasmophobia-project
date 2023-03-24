import { styled } from '@mui/material/styles';
import { Box, Card, Typography, Button } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	paddingTop: '2rem',
	paddingLeft: '4rem',
	paddingRight: '4rem',
	paddingBottom: '2rem',
}));

const cardListContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1rem',
}));

const cardContainer = styled(Card)(({ theme }) => ({
	width: '12.5rem',
	height: '14rem',
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
}));

const cardButton = styled(Button)(({ theme }) => ({
	// marginLeft: 'auto',
	// marginRight: 'auto',
	position: 'absolute',
	top: '80%',
	left: '30%',
	background: '-webkit-linear-gradient(#828282, #e30f00)',
	// backgroundClip: 'text',
	// WebkitTextFillColor: 'transparent',
}));

export {
	mainContainer,
	cardListContainer,
	cardContainer,
	evidence,
	cardButton,
};
