import { categorie } from "./categories"

export type Product = {
    id: number,
    image: string,
    name: string,
    price: number,
    category: categorie,
    description?: string
}