interface IPages {
  name: string;
  link: string;
}

const pages: IPages[] = [
  // {
  // 	name: 'Ghosts',
  // 	link: '/ghosts',
  // },
  {
    name: "Equipment",
    link: "/equipment",
  },
  {
    name: "Cursed Objects",
    link: "/cursedobjects",
  },
  {
    name: "Maps",
    link: "/maps",
  },
  {
    name: "Hunt",
    link: "/hunt",
  },
];

const pagesBr: IPages[] = [
  {
    name: "Equipamento",
    link: "/equipment",
  },
  {
    name: "Objetos Amaldiçoados",
    link: "/cursedobjects",
  },
  {
    name: "Mapas",
    link: "/maps",
  },
  {
    name: "Ataque",
    link: "/hunt",
  },
];

export { pages, pagesBr };
