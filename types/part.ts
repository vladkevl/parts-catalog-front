export type ICategory = {
    id: number;
    name: string;
}

export type ICategoryProps = {
    categories: ICategory[];
}

export type IPart = {
    id: number;
    model: {
        id: number;
        name: string;
        code: string;
        brand: {
            code: string;
            id: number;
            name: string;
        }
    }
    year: number;
    category: ICategory;
    body?: {
        id: number;
        name: string;
    }
    article?: string;
    code?: string;
    description?: string;
    engine_type?: {
        id: number;
        name: string;
    }
    engine_volume?: string;
    fuel?: {
        id: number;
        name: string;
    }
    price?: number;
    transmission?: {
        id: number;
        name: string;
    }
    version?: string;
    files?: {
        id: number;
    }
}

export type IPartProps = {
    part: IPart;
}

export type IPartsProps = {
    parts: IPart[];
}
