import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Filter({
	data,
	filter,
	setFilter,
}: {
	data: any;
	filter: string;
	setFilter: any;
}) {
	interface Ioption {
		label: string;
		value: string;
	}

	return (
		<FormControl
			sx={{ m: 1, minWidth: 120 }}
			size='small'
			style={{
				backgroundColor: 'white',
			}}
		>
			<InputLabel id={data.id} sx={{ color: '#ff4545' }}>
				{data.label}
			</InputLabel>
			<Select
				labelId={data.id}
				id={data.id}
				value={filter}
				label={data.label}
				onChange={e => setFilter(e.target.value)}
			>
				<MenuItem value='All'>
					<em>All</em>
				</MenuItem>
				{data.options.map((item: Ioption) => {
					return <MenuItem value={item.value}>{item.label}</MenuItem>;
				})}
			</Select>
		</FormControl>
	);
}
