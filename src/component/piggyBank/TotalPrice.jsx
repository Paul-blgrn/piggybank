import { useContext } from "react";
import PiggyBankContext from "../../context/PiggyBankContext";
import TotalPriceContext from "../../context/TotalPriceContext";
import { useEffect } from "react";
import { counterPrice } from "../../utils/counterPrice";
import { useState } from "react";

export default function TotalPrice() {
    const { item, setItem } = useContext(PiggyBankContext);
    const [ totalPrice, setTotalPrice ] = useState(0)

    const checkArticles = () => {
        item.map((article) => {
            const getArticleIndex = item.findIndex(
                (objectID) => objectID.id === article.id
            )
            if (getArticleIndex === -1) {
                setItem([...item.filter((itemList) => itemList.id != article.id )])
            }
        })
    }

    useEffect(() => {
        checkArticles()
        const prices = []
        item.map((article) => {
            prices.push({price:article.price, quantity:article.quantity})
        })

        const totalPrices = counterPrice(prices)
        setTotalPrice(totalPrices)
        //console.log(totalPrices)
    }, [item])

  return (
    <div id="sum">
        <p>Le prix total est de {totalPrice}</p>
    </div>
  )
}
