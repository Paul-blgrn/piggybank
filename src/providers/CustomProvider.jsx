import { useState } from "react";
import PiggyBankContext from "../context/PiggyBankContext";
import TotalPriceContext from "../context/TotalPriceContext";
import { fakeItems } from "../fakeData/fakedata"

export const CustomProvider = ({ children }) => {
    const [item, setItem] = useState(fakeItems);
    const [totalPrice, setTotalPrice] = useState(0);

    const piggyBankContextValue = {
        item,
        setItem,
    }

    const totalPriceContextValue = {
        totalPrice,
        setTotalPrice,
    }

    return (
        <PiggyBankContext.Provider value={piggyBankContextValue}>
            <TotalPriceContext.Provider value={totalPriceContextValue}>
                {children}
            </TotalPriceContext.Provider>
        </PiggyBankContext.Provider>
    )
}
