import Equipments from '@/src/components/equipments/Equipments';
import { Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function EquipmentPage() {
	return (
		<>
			<Head>
				<title>Equipment List - Phasmophobia</title>
				<meta
					name='description'
					content='You will become a pro in the game Phasmophobia'
				/>
			</Head>
			<Equipments />
		</>
	);
}
