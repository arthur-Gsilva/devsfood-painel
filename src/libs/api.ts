import { categorie } from "@/types/categories"
import { OrderType } from "@/types/order"
import { orderStatusType } from "@/types/orderStatus"
import { Product } from "@/types/product"

const tempProduct: Product = {
    id: 999,
    image: 'https://saopaulosecreto.com/wp-content/uploads/2022/10/Get-Burger-1240x686.jpg',
    name: 'burger king',
    price: 35.5,
    category: {
        id: 123,
        name: 'burger'
    },
    description: 'um burgao legal'
}


export const api = {
    login: async (email: string, password: string): Promise<{error: string, token?: string}> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if(email !== "email@email.com"){
                    resolve({
                        error: "Email e/ou senha incorretos."
                    })
                } else{
                    resolve({
                        error: '',
                        token: '123'
                    })
                }
            }, 1000)
        })
    },

    forgotPassword: async (email: string): Promise<{error: string}> => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve({ error: '' })
            }, 1000)
        })
    },

    redefinePassword: async (password: string, token: string): Promise<{error: string}> => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve({ error: '' })
            }, 1000)
        })
    },

    getOrders: async (): Promise<OrderType[]> => {
        return new Promise (resolve => {
            setTimeout(() => {

                const order: OrderType[] = []
                const statuses: orderStatusType[] = ['preparing', 'sent', 'delivered']
                
                for(let i = 0; i < 6; i++){
                    order.push({
                        id: parseInt('12' + i),
                        status: statuses[Math.floor(Math.random() * 3)],
                        orderDate: '2023-02-03',
                        userID: '1',
                        username: 'Arthur',
                        address: 'Recife',
                        shippingPrice: 8.5,
                        dicount: 5,
                        product: [
                            {qt: 2, product: tempProduct},
                            {qt: 3, product: {...tempProduct, id: 888, name: 'burger vegetariano'}},
                        ],
                        total: 120
                    })
                }

                resolve(order)

            }, 1000)
        })
    },

    changeOrderStatus: async (id: number, newStatus: orderStatusType) => {
        return true
    },

    getCategories: async (): Promise<categorie[]> => {
        const list: categorie[] = [
            {id: 99, name:'burger'},
            {id: 98, name:'refrigerantes'},
            {id: 97, name:'doces'},
        ]

        return new Promise (resolve => {
            setTimeout(() => {
                resolve(list)
            }, 500)
        })
    },

    getProducts: async (): Promise<Product[]> => {
        const list: Product[] = [
            {...tempProduct, id: 123},
            {...tempProduct, id: 124},
            {...tempProduct, id: 125},
            {...tempProduct, id: 126},
            {...tempProduct, id: 127},
            {...tempProduct, id: 128},
            {...tempProduct, id: 129},
            {...tempProduct, id: 130},
        ]

        return new Promise (resolve => {
            setTimeout(() => {
                resolve(list)
            }, 500)
        })
    }
}