import * as Layout from './GhostCard.styles';
import { CardActions, CardContent, Typography } from '@mui/material';
import { ghostCard } from './data';
import Link from 'next/link';

export default function GhostCard() {
	return (
		<Layout.mainContainer>
			<Layout.cardListContainer>
				{ghostCard.map(ghost => {
					return (
						<Layout.cardContainer sx={{ minWidth: 275 }}>
							<CardContent>
								<Typography sx={{ mb: 1.5 }} color='white'>
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
