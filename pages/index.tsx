import { Box, Typography, Button } from '@mui/material';
import Head from 'next/head';

export default function HomePage() {
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
					marginTop: '2rem',
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
			</Box>
		</>
	);
}
