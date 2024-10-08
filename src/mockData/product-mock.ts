import hamburguesa_1 from "../assets/hamburguesa_1.png";
import hamburguesa_2 from "../assets/hamburguesa_2.png";
import hamburguesa_3 from "../assets/hamburguesa_3.png";
import hamburguesa_4 from "../assets/hamburguesa_4.png";
import hamburguesa_5 from "../assets/hamburguesa_5.png";
import hamburguesa_6 from "../assets/hamburguesa_6.png";

import bebida_1 from "../assets/bebida_1.jpg";
import bebida_2 from "../assets/bebida_2.jpg";
import bebida_3 from "../assets/bebida_3.jpg";
import bebida_4 from "../assets/bebida_4.jpg";

export interface Product {
  id?: number;
  img: string;
  title: string;
  price: number;
  description: string;
}

export const ProductsMock: Product[] = [
  {
    id: 1,
    img: hamburguesa_1,
    title: "Chicago",
    price: 28000,
    description:
      "Una hamburguesa tradicional con carne jugosa, queso, lechuga, tomate y una salsa especial.",
  },
  {
    id: 2,
    img: hamburguesa_2,
    title: "Bogotá",
    price: 32000,
    description:
      "Hamburguesa con carne a la parrilla, cebolla caramelizada, bacon crujiente y queso cheddar.",
  },
  {
    id: 3,
    img: hamburguesa_3,
    title: "Santiago",
    price: 26000,
    description:
      "Con carne de res, guacamole, queso de cabra y una mezcla de vegetales frescos.",
  },
  {
    id: 4,
    img: hamburguesa_4,
    title: "Lima",
    price: 30000,
    description:
      "Hamburguesa con carne de res, cebolla morada, tomate, lechuga y queso cheddar.",
  },
  {
    id: 5,
    img: hamburguesa_5,
    title: "Quito",
    price: 27000,
    description:
      "Hamburguesa con carne de res, champiñones, queso azul y una salsa especial.",
  },
  {
    id: 6,
    img: hamburguesa_6,
    title: "Caracas",
    price: 29000,
    description:
      "Hamburguesa con carne de res, queso cheddar, bacon crujiente y una salsa especial.",
  },
];

export const DrinksMock: Product[] = [
  {
    id: 1,
    img: bebida_1,
    title: "Agua Cielo",
    price: 3000,
    description:
      "Agua pura Cielo 500ml",
  },
  {
    id: 2,
    img: bebida_2,
    title: "Colombiana",
    price: 3000,
    description:
      "Gaseosa Colombiana 500ml",
  },
  {
    id: 3,
    img: bebida_3,
    title: "Manzana",
    price: 3000,
    description:
      "Gaseosa de Manzana 500ml",
  },
  {
    id: 4,
    img: bebida_4,
    title: "Pepsi",
    price: 4000,
    description:
      "Gaseosa Pepsi 500ml",
  },
];
