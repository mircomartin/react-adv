export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter : number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface onChangeArgs {
    count: number;
    product: Product;
}

export interface ProductInCart extends Product {
	count: number;
}