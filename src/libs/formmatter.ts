export const formmatter = {
     dateFormmatter: (date: string | Date) => {
        return new Intl.DateTimeFormat('pt-BR', 
        {dateStyle: 'short', timeStyle: 'short'}).format(date instanceof Date ? date : new Date(date))
    },

    formatPrice: (price: number | undefined) => {
        return price?.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency:'BRL'
        })
    }
}