// if define Interface have to use I before name

export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    quantity: number
}

export interface Rating {
    rate: number
    count: number
}
