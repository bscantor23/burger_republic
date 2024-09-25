interface MenuItem {
  id: number;
  name: string;
  link: string;
  permission?: boolean;
}

export const MenuMock: MenuItem[] = [
  {
    id: 1,
    name: "Nosotros",
    permission: false,
    link: "/about-us",
  },
  {
    id: 2,
    name: "Menú",
    permission: false,
    link: "/menu",
  },
  {
    id: 3,
    name: "Contacto",
    permission: false,
    link: "/contact",
  },
  {
    id: 4,
    name: "Usuarios",
    permission: true,
    link: "/users",
  },
  {
    id: 5,
    name: "Productos",
    permission: true,
    link: "/products",
  },
];
