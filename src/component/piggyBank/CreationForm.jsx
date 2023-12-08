import { useContext } from "react";
import { useState } from "react";
import PiggyBankContext from "../../context/PiggyBankContext";

export default function CreationForm() {
    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ quantity, setQuantity ] = useState("")

    const { item, setItem } = useContext(PiggyBankContext)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const resetValues = () => {
        setName("")
        setDesc("")
        setPrice("")
        setQuantity("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLine = {
            id: item.length +1,
            name: name,
            desc: desc,
            price: price,
            quantity: quantity,
        }
        setItem([...item, newLine])
        resetValues()
    }

    return (
        <form className="newLineForm" onSubmit={handleSubmit}>
            <label>Nom: </label>
            <input value={name} onChange={handleChangeName} required type="text" placeholder="Nom"></input>

            <label>Description: </label>
            <input value={desc} onChange={handleChangeDesc} type="text" placeholder="Description"></input>

            <label>Prix: </label>
            <input value={price} onChange={handleChangePrice} required type="number" placeholder="Prix"></input>
            
            <label>Quantité: </label>
            <input value={quantity} onChange={handleChangeQuantity} required type="number" placeholder="Quantité"></input>

            <button>Valider le formulaire</button>
        </form>
    )
}
