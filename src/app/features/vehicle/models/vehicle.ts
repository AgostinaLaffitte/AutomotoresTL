export interface Vehicle{
    _id?: string;
    brand: string,
    version: string,
    year: number,
    mileage: number,
    images: string[];
    comment?: string;
    price: number;
    isFavorite?: boolean;
};

