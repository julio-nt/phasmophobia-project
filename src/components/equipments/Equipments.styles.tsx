import { styled } from '@mui/material';
import { Box, Typography, Paper } from '@mui/material';
import Link from 'next/link';

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

const equip = styled(Box)(({ theme }) => ({
	border: '3px solid #e30f00',
	position: 'relative',
	padding: '1.5rem',
	borderRadius: '5px',
	display: 'flex',
	gap: '1rem',
	flexWrap: 'wrap',
	marginBottom: '2rem',
}));

const equipSections = styled(Box)(({ theme }) => ({
	// border: '3px solid #e30f00',
	position: 'relative',
	padding: '1.5rem',
	borderRadius: '5px',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
}));

const equipTitles = styled(Typography)(({ theme }) => ({
	variant: 'h5',
	position: 'absolute',
	top: '-2.7rem',
	backgroundColor: '#e30f00',
	color: 'white',
	padding: '2px 5px 2px 5px',
	borderRadius: '10px',
}));

const equipNames = styled(Link)(({ theme }) => ({
	color: 'lightgray',
	padding: '5px',
	borderRadius: '10px 2px 2px 10px',
	width: '15rem',
	background: 'linear-gradient(to left, black 30%, #e30f00 50%) right',
	backgroundSize: '200%',
	transition: '.8s ease-out',
	// marginBottom: '2rem',
	'&:hover': {
		backgroundPosition: 'left',
	},
	'&:last-child': {
		marginBottom: '2rem',
	},
}));

export { mainSection, equip, equipSections, equipTitles, equipNames };
