import { Box, Typography } from '@mui/material';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '95%',
				left: '43%',
			}}
		>
			<Typography>Copyright © {currentYear} Hakulino</Typography>
		</Box>
	);
}
