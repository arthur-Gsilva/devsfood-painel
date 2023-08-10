import { CartItem } from "./cartItem"
import { orderStatusType } from "./orderStatus"

export type OrderType = {
    id: number,
    status: orderStatusType,
    orderDate: string,
    userID: string,
    username?: string,
    address: string,
    shippingPrice: number,
    dicount?: number,
    product: CartItem[],
    total: number
}