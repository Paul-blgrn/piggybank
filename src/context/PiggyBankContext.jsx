import { createContext } from "react"


export default createContext({

    item: [
        {
            id: "",
            name: "",
            desc: "",
            price: 0,
            quantity: 1,
        }
    ],
    
    setItem: () => {},
})
