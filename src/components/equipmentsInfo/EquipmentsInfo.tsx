import { Typography } from '@mui/material';
import * as Layout from './EquipmentsInfo.styles';
import { equipments } from './data';

export default function EquipmentsInfo(props: any) {
	const currentEquip = equipments.find(
		(equip: any) => equip.name === props.equipment
	);
	return (
		<Layout.mainSection>
			<Typography variant='h3'>{currentEquip?.name}</Typography>
			<Layout.sectionTitles variant='h5'>Basic Info</Layout.sectionTitles>
			{currentEquip?.basicInfo.map((item, i) => {
				return <Layout.text>{item}</Layout.text>;
			})}
			<Layout.sectionTitles variant='h5'>Tips</Layout.sectionTitles>
			{currentEquip?.tips.map((item, i) => {
				return <Layout.text>{item}</Layout.text>;
			})}
		</Layout.mainSection>
	);
}
