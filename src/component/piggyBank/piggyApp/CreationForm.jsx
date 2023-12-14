import { useContext } from "react";
import { useState } from "react";
import PiggyBankContext from "../../../context/PiggyBankContext";
import styled from "styled-components";
import { theme } from "../../../theme/index"
import '../PiggyBank.css'

export default function CreationForm({show}) {
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
        <PiggyFormStyled id="creationForm" className="hiddenform" onSubmit={handleSubmit}>
            <div>
                <label>Nom: </label>
                <input value={name} onChange={handleChangeName} required type="text" placeholder="Nom"></input>
            </div>

            <div>
                <label>Description: </label>
                <input value={desc} onChange={handleChangeDesc} type="text" placeholder="Description"></input>
            </div>
            <div>
                <label>Prix: </label>
                <input value={price} onChange={handleChangePrice} required type="number" placeholder="Prix"></input>
            </div>
            <div>
                
                <label>Quantité: </label>
                <input value={quantity} onChange={handleChangeQuantity} required type="number" placeholder="Quantité"></input>
            </div>
            <div>
                <button>Valider le formulaire</button>
            </div>
        </PiggyFormStyled>
    )
}


const PiggyFormStyled = styled.form`
    min-width: 400px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 20px 15px;
    margin: 0 auto;
    background-color: ${theme.colors.greyMedium};
    border-radius: ${theme.borderRadius.round};

    div {
        min-width: 200px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    label {
        padding: 8px 0px;
    }

    input {
        padding: 20px 15px;
        margin: 5px 0;
        min-width: 150px;
        max-width: 200px;
        background: white;
        border-radius: ${theme.borderRadius.round};
        border: none;
        color: ${theme.colors.dark};
    }
    input::placeholder {
        background-color: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
    }

    button {
        background: green;
        border: 1px solid green;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        font-weight: 800;
        padding: 16px 24px;
        width: 100%;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        cursor: pointer;
        line-height: 1;
    }
    button:hover:not(:disabled) {
        background: white;
        color: green;
        border: 1px solid green;
        transition: all 0.3s ease-in-out;
        /* transform: scale(1.05); */
    }
    button:active {
        color: white;
        background: green;
        border: 1px solid green;
    }
    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
