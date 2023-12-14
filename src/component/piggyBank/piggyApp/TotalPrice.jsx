import { useContext, useEffect } from "react";
import PiggyBankContext from "../../../context/PiggyBankContext";
import TotalPriceContext from "../../../context/TotalPriceContext";
import { counterPrice } from "../../../utils/counterPrice";

import '../PiggyBank.css'

export default function TotalPrice() {
    const { item, setItem } = useContext(PiggyBankContext);
    const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

    useEffect(() => {
        const prices = []
        item.map((article) => {
            const getArticleIndex = item.findIndex(
                (objectID) => objectID.id === article.id
            )
            if (getArticleIndex === -1) {
                return setItem([...item.filter((itemList) => itemList.id !== article.id )])
            } else {
                return prices.push({price:article.price, quantity:article.quantity})
            }
        })

        const totalPrices = counterPrice(prices)
        setTotalPrice(totalPrices)
        //console.log(totalPrices)
    }, [item, setItem, setTotalPrice])

  return (
    <div id="sum">
        <p>Le prix total est de {totalPrice}</p>
    </div>
  )
}
