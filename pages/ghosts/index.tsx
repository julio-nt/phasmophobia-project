import GhostCard from '@/src/components/ghostCard/GhostCard';
import Head from 'next/head';

export default function GhostPage() {
	return (
		<>
			<Head>
				<title>Ghosts List - Phasmophobia</title>
				<meta name='description' content='Ghosts List - Phasmophobia' />
			</Head>
			<GhostCard />
		</>
	);
}
