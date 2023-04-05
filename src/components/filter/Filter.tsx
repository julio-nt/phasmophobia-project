import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Filter() {
	const [speed, setSpeed] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setSpeed(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
			<InputLabel id='speed'>Speed</InputLabel>
			<Select
				labelId='speed'
				id='speed'
				value={speed}
				label='Speed'
				onChange={handleChange}
			>
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>
				<MenuItem value={'very slow'}>Very Slow</MenuItem>
				<MenuItem value={'slow'}>Slow</MenuItem>
				<MenuItem value={'normal'}>Normal</MenuItem>
				<MenuItem value={'fast'}>Fast</MenuItem>
				<MenuItem value={'very fast'}>Very Fast</MenuItem>
				<MenuItem value={'varies'}>Varies</MenuItem>
			</Select>
		</FormControl>
	);
}
