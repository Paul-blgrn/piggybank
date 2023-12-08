import { formatPrice } from "./maths"

export const counterPrice = ( allprice ) => {
    let initialValue = 0
    allprice.forEach((item) => {
        if (allprice.quantity === 0) {
            initialValue += item.price
        } else {
            initialValue += item.price * item.quantity
        }
    })
    return formatPrice(initialValue)
}
