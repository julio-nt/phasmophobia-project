import * as Layout from './GhostCard.styles';
import { CardActions, CardContent, Typography } from '@mui/material';
import { ghostCard } from './data';
import Link from 'next/link';
import Filter from '../filter/Filter';
import { useState } from 'react';

export default function GhostCard() {
	const [speed, setSpeed] = useState('');
	const [hunt, setHunt] = useState('');

	const speedData = {
		id: 'speed',
		label: 'Speed',
		options: [
			{
				label: 'Very Slow',
				value: 'very slow',
			},
			{
				label: 'Slow',
				value: 'slow',
			},
			{
				label: 'Normal',
				value: 'normal',
			},
			{
				label: 'Fast',
				value: 'fast',
			},
			{
				label: 'Very Fast',
				value: 'very fast',
			},
			{
				label: 'Varies',
				value: 'varies',
			},
		],
	};
	const huntData = {
		id: 'hunt',
		label: 'Hunt',
		options: [
			{
				label: 'Early',
				value: 'early',
			},
			{
				label: 'Normal',
				value: 'normal',
			},
			{
				label: 'Late',
				value: 'late',
			},
			{
				label: 'Varies',
				value: 'varies',
			},
		],
	};

	return (
		<Layout.mainContainer>
			<Filter data={speedData} filter={speed} setFilter={setSpeed} />
			<Filter data={huntData} filter={hunt} setFilter={setHunt} />
			<Layout.cardListContainer>
				{speed != 'All'
					? ghostCard
							.filter(ghost => ghost.speed.includes(speed))
							.map(ghost => {
								ghost.speed.includes(speed);
								return (
									<Layout.cardContainer
										sx={{ minWidth: 275 }}
									>
										<CardContent>
											<Typography
												sx={{ mb: 1.5 }}
												color='white'
											>
												{ghost.name}
											</Typography>
											<Typography variant='body1'>
												{ghost.shortInfo}
											</Typography>
											<Layout.evidence variant='body2'>
												{ghost.evidence}
											</Layout.evidence>
										</CardContent>
										<CardActions>
											<Link
												href={`/ghosts/${ghost.name}`}
												key={ghost.name}
											>
												<Layout.cardButton
													size='small'
													variant='contained'
												>
													Learn More
												</Layout.cardButton>
											</Link>
										</CardActions>
									</Layout.cardContainer>
								);
							})
					: ghostCard.map(ghost => {
							return (
								<Layout.cardContainer sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography
											sx={{ mb: 1.5 }}
											color='white'
										>
											{ghost.name}
										</Typography>
										<Typography variant='body1'>
											{ghost.shortInfo}
										</Typography>
										<Layout.evidence variant='body2'>
											{ghost.evidence}
										</Layout.evidence>
									</CardContent>
									<CardActions>
										<Link
											href={`/ghosts/${ghost.name}`}
											key={ghost.name}
										>
											<Layout.cardButton
												size='small'
												variant='contained'
											>
												Learn More
											</Layout.cardButton>
										</Link>
									</CardActions>
								</Layout.cardContainer>
							);
					  })}
			</Layout.cardListContainer>
		</Layout.mainContainer>
	);
}
