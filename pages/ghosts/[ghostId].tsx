import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { ghostCard } from '@/src/components/ghostCard/data';
import Head from 'next/head';

export default function Ghost() {
	const router = useRouter();
	const ghostId = router.query.ghostId;
	const myGhost = ghostCard.find(card => card.name === ghostId);

	return (
		<Box>
			<Head>
				<title>{ghostId} - Phasmophobia</title>
				<meta name='description' content='Ghost Info - Phasmophobia' />
			</Head>
			<Typography variant='h5'>
				This is the {myGhost?.name} page
			</Typography>
			<Typography>{myGhost?.evidence}</Typography>
		</Box>
	);
}
