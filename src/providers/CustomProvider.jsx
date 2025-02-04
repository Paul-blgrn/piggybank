import { useState } from "react";
import GlobalContext from "../context/GlobalContext";
import PiggyBankContext from "../context/PiggyBankContext";
import TotalPriceContext from "../context/TotalPriceContext";
import { fakeItems } from "../fakeData/fakedata"

export const CustomProvider = ({ children }) => {
    const [item, setItem] = useState(fakeItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCreationForm, setShowCreationForm] = useState(false);

    const piggyBankContextValue = {
        item,
        setItem,
    }

    const totalPriceContextValue = {
        totalPrice,
        setTotalPrice,
    }

    const globalContextValue = {
        showCreationForm,
        setShowCreationForm,
    }

    return (
        <GlobalContext.Provider value={globalContextValue}>
            <PiggyBankContext.Provider value={piggyBankContextValue}>
                <TotalPriceContext.Provider value={totalPriceContextValue}>
                    {children}
                </TotalPriceContext.Provider>
            </PiggyBankContext.Provider>
        </GlobalContext.Provider>
    )
}
