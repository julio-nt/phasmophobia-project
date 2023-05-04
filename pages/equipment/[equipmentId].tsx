import EquipmentsInfo from '@/src/components/equipmentsInfo/EquipmentsInfo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function Equipment() {
	const router = useRouter();
	const equipmentId = router.query.equipmentId;
	return (
		<>
			<Head>
				<title>{equipmentId} - Phasmophobia</title>
				<meta
					name='description'
					content='Equipment Info - Phasmophobia'
				/>
			</Head>
			<EquipmentsInfo equipment={equipmentId} />
		</>
	);
}
