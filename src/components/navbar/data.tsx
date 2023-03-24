interface IPages {
	name: string;
	link: string;
}

const pages: IPages[] = [
	{
		name: 'Ghosts',
		link: '/ghosts',
	},
	{
		name: 'Equipment',
		link: '/equipment',
	},
	{
		name: 'Cursed Objects',
		link: '/cursedobjects',
	},
	{
		name: 'Maps',
		link: '/maps',
	},
];

export { pages };
