export function formatPrice(priceToformat) {
    let price = priceToformat

    if (!price) return "0,00 €"
    price = replaceFrenchCommaWithDot(price)

    const formatedPrice = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(price)
    return formatedPrice
}

export function replaceFrenchCommaWithDot(price) {
    if (typeof price === "string") price = parseFloat(price.replace(",", "."))
    return price 
}