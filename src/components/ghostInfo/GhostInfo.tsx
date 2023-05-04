import {
	Box,
	Typography,
	Backdrop,
	SpeedDial,
	SpeedDialAction,
} from '@mui/material';
import { ghostInfo } from './data';
import * as Layout from './GhostInfo.styles';
import { useState } from 'react';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const actions = [
	{ icon: <EmojiObjectsIcon />, name: 'Strategies', id: 'strategies' },
	{ icon: <RemoveRedEyeIcon />, name: 'Behaviour', id: 'behaviour' },
	{ icon: <TransferWithinAStationIcon />, name: 'Speed', id: 'speed' },
	{ icon: <PriorityHighIcon />, name: 'Hunt', id: 'hunt' },
];

export default function GhostInfo(props: any) {
	const currentGhost = ghostInfo.find(
		(card: any) => card.name === props.ghost
	);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id) ?? undefined;
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Layout.mainSection>
				<Layout.title variant='h4' id='hunt'>
					<b>{currentGhost?.name}</b>
				</Layout.title>
				<Box
					sx={{
						paddingLeft: '1rem',
					}}
				>
					<Layout.sectionTitles id='speed'>
						<b>Hunt possible at:</b> {currentGhost?.hunt}
					</Layout.sectionTitles>
					<Layout.sectionTitles id='behaviour'>
						<b>Speed:</b> {currentGhost?.speed}
					</Layout.sectionTitles>
					<Layout.sectionTitles>
						<b>Behaviour | Abilities</b>
					</Layout.sectionTitles>
					<Layout.cardBox>
						{currentGhost?.behaviour.map((item, i) => {
							return (
								<Layout.card elevation={3}>
									{item.includes('WARNING') ? (
										<Layout.cardText>
											<span style={{ fontWeight: '900' }}>
												{i + 1} -
											</span>
											<b> {item}</b>
										</Layout.cardText>
									) : (
										<Layout.cardText>
											<span style={{ fontWeight: '900' }}>
												{i + 1} -
											</span>{' '}
											{item}
										</Layout.cardText>
									)}
								</Layout.card>
							);
						})}
					</Layout.cardBox>
					<Layout.sectionTitles id='strategies'>
						<b>Strategies</b>
					</Layout.sectionTitles>
					<Layout.cardBox>
						{currentGhost?.strategies.map((item, i) => {
							return (
								<Layout.card elevation={3}>
									{item.includes('WARNING') ? (
										<Layout.cardText>
											<span style={{ fontWeight: '900' }}>
												{i + 1} -
											</span>
											<b> {item}</b>
										</Layout.cardText>
									) : (
										<Layout.cardText>
											<span style={{ fontWeight: '900' }}>
												{i + 1} -
											</span>
											{item}
										</Layout.cardText>
									)}
								</Layout.card>
							);
						})}
					</Layout.cardBox>
				</Box>
			</Layout.mainSection>
			<Box
				sx={{
					height: 330,
					transform: 'translateZ(0px)',
					flexGrow: 1,
					position: 'fixed',
					bottom: 16,
					right: 10,
				}}
			>
				<Backdrop open={open} />
				<SpeedDial
					ariaLabel='SpeedDial tooltip example'
					sx={{
						position: 'fixed',
						bottom: 16,
						right: 16,
					}}
					icon={<SpeedDialIcon />}
					onClose={handleClose}
					onOpen={handleOpen}
					open={open}
					FabProps={{
						sx: {
							bgcolor: 'red',
							'&:hover': {
								bgcolor: 'red',
							},
						},
					}}
				>
					{actions.map(action => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
							tooltipOpen
							onClick={() => scrollToSection(action.id)}
						/>
					))}
				</SpeedDial>
			</Box>
		</>
	);
}
