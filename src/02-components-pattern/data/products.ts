import { Product } from "../interfaces/productsInterfaces";

const product1 = {
	id: '1',
	title: 'Coffe Mug 1',
	img: './coffee-mug.png',
};

const product2 = {
	id: '2',
	title: 'Coffe Mug 2',
	img: './coffee-mug2.png',
};

export const products: Product[] = [product1, product2];