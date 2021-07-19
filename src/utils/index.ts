export const currencyFormat = (value: number, decimal?: number): string => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        useGrouping: true
    }).format(value)
}