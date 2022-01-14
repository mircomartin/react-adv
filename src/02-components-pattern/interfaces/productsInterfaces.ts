export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter : number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface onChangeArgs {
    count: number;
    product: Product;
}

export interface ProductInCart extends Product {
	count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value:number) => void;
    reset: () => void;
}