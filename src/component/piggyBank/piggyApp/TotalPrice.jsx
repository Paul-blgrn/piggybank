import { useContext, useEffect } from "react";
import PiggyBankContext from "../../../context/PiggyBankContext";
import TotalPriceContext from "../../../context/TotalPriceContext";
import { counterPrice } from "../../../utils/counterPrice";

import styled from "styled-components";
import { theme } from "../../../theme/index"
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
    <ResultDivStyled id="sum">
        <p className="totalresult">La totale restante est de <span>{totalPrice}</span></p>
    </ResultDivStyled>
  )
}

const ResultDivStyled = styled.div`
    width: 60vw;
    margin: 0 auto;

    .totalresult {
      margin: 0;
      padding: 10px;
      color: ${theme.colors.white};
      font-weight: bold;
    }

`;