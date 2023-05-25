import { Box, Typography, Button } from '@mui/material';
import Head from 'next/head';

export default function HomePage() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<Head>
				<title>Phasmophobia Project</title>
				<meta
					name='description'
					content='You will become a pro in the game Phasmophobia'
				/>
			</Head>
			<Box
				sx={{
					textAlign: 'center',
					paddingTop: '2rem',
					paddingLeft: '1rem',
					paddingRight: '1rem',
				}}
			>
				<Typography variant='h3'>
					Welcome to Phasmophobia Project
				</Typography>
				<Typography variant='h6'>
					Here you will learn everything you need to be a pro in
					Phasmophobia.
				</Typography>
				<Typography
					sx={{
						position: 'absolute',
						top: '95%',
						width: '95%',
					}}
				>
					Copyright © {currentYear} Hakulino
				</Typography>
			</Box>
		</>
	);
}
