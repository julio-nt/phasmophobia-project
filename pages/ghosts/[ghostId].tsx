import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Head from 'next/head';
import GhostInfo from '@/src/components/ghostInfo/GhostInfo';

export default function Ghost() {
	const router = useRouter();
	const ghostId = router.query.ghostId;

	return (
		<Box>
			<Head>
				<title>{ghostId} - Phasmophobia</title>
				<meta name='description' content='Ghost Info - Phasmophobia' />
			</Head>
			<GhostInfo ghost={ghostId} />
		</Box>
	);
}
