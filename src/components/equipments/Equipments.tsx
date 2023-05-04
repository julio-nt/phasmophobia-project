import { Typography } from '@mui/material';
import * as Layout from './Equipments.styles';
import { equipments } from './data';

export default function Equipments() {
	return (
		<Layout.mainSection>
			<Layout.equip>
				<Layout.equipSections>
					<Layout.equipTitles variant='h5'>
						Primary
					</Layout.equipTitles>
					{equipments.map((item, i) => {
						return item.primary ? (
							<Layout.equipNames
								href={`/equipment/${item.name}`}
								key={item.name}
							>
								<Typography>{item.name}</Typography>
							</Layout.equipNames>
						) : null;
					})}
				</Layout.equipSections>
				<Layout.equipSections>
					<Layout.equipTitles variant='h5'>
						Secondary
					</Layout.equipTitles>
					{equipments.map((item, i) => {
						return item.secondary ? (
							<Layout.equipNames
								href={`/equipment/${item.name}`}
								key={item.name}
							>
								<Typography>{item.name}</Typography>
							</Layout.equipNames>
						) : null;
					})}
				</Layout.equipSections>
			</Layout.equip>
			<Layout.equip>
				<Layout.equipSections>
					<Layout.equipTitles variant='h5'>
						Find Ghost Room
					</Layout.equipTitles>
					{equipments.map((item, i) => {
						return item.findGhost ? (
							<Layout.equipNames
								href={`/equipment/${item.name}`}
								key={item.name}
							>
								<Typography>{item.name}</Typography>
							</Layout.equipNames>
						) : null;
					})}
				</Layout.equipSections>
				<Layout.equipSections>
					<Layout.equipTitles variant='h5'>
						Evidence
					</Layout.equipTitles>
					{equipments.map((item, i) => {
						return item.findEvidence ? (
							<Layout.equipNames
								href={`/equipment/${item.name}`}
								key={item.name}
							>
								<Typography>{item.name}</Typography>
							</Layout.equipNames>
						) : null;
					})}
				</Layout.equipSections>
				<Layout.equipSections>
					<Layout.equipTitles variant='h5'>Test</Layout.equipTitles>
					{equipments.map((item, i) => {
						return item.test ? (
							<Layout.equipNames
								href={`/equipment/${item.name}`}
								key={item.name}
							>
								<Typography>{item.name}</Typography>
							</Layout.equipNames>
						) : null;
					})}
				</Layout.equipSections>
			</Layout.equip>
		</Layout.mainSection>
	);
}
