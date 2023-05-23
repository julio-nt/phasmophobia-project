import { Typography } from '@mui/material';
import * as Layout from './EquipmentsInfo.styles';
import { equipments } from './data';

export default function EquipmentsInfo(props: any) {
	const currentEquip = equipments.find(
		(equip: any) => equip.name === props.equipment
	);
	return (
		<Layout.mainSection>
			<Typography variant='h4'>{currentEquip?.name}</Typography>
			{currentEquip?.basicInfo.map((item, i) => {
				return <Typography>{item}</Typography>;
			})}
		</Layout.mainSection>
	);
}
