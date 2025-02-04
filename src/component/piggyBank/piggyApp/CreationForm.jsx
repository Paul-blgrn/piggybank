import { useContext } from "react";
import { useState } from "react";
import Select from 'react-select';

import PiggyBankContext from "../../../context/PiggyBankContext";
import GlobalContext from "../../../context/GlobalContext";

import styled from "styled-components";
import { theme } from "../../../theme/index"
import '../PiggyBank.css'

const options = [
    { value: 'revenu', label: 'Revenu' },
    { value: 'dépense', label: 'Dépense' }
];

export default function CreationForm({show}) {
    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ quantity, setQuantity ] = useState("")
    const [type, setType] = useState(null);

    const {showCreationForm, setShowCreationForm} = useContext(GlobalContext);

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

    const handleChangeType = (selectedOption) => {
        setType(selectedOption);
    };

    const resetValues = () => {
        setName("")
        setDesc("")
        setPrice("")
        setType(null);
        setQuantity("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedPrice = type && type.value === "dépense" ? -Math.abs(parseFloat(price)) : Math.abs(parseFloat(price));
        const newLine = {
            id: item.length +1,
            name: name,
            desc: desc,
            price: formattedPrice,
            type: type ? type.value : "",
            quantity: quantity || 1,
        }
        setItem([...item, newLine])
        resetValues()
    }

    return (
        // className="hiddenform"
        <PiggyFormStyled id="creationForm" className={showCreationForm ? "visibleform" : "hiddenform"} onSubmit={handleSubmit}>
            <div className="customdiv">
                <label>Nom: </label>
                <input value={name} onChange={handleChangeName} required type="text" placeholder="Nom" maxLength={25}></input>
            </div>

            <div className="customdiv">
                <label>Description: </label>
                <input value={desc} onChange={handleChangeDesc} type="text" placeholder="Description" maxLength={25}></input>
            </div>
            <div className="customdiv">
                <label>Prix: </label>
                <input value={price} onChange={handleChangePrice} required type="number" placeholder="Prix"></input>
            </div>
            <div className="customdiv">
                <label>Type: </label>
                <StyledSelect  
                    required
                    defaultValue={options[0]}
                    value={type} 
                    onChange={handleChangeType} 
                    options={options}
                    placeholder="Sélectionnez un type"
                />
            </div>
            <div className="customdiv">
                
                <label>Quantité: </label>
                <input value={quantity} onChange={handleChangeQuantity} type="number" placeholder="Quantité"></input>
            </div>
            <div>
                <button>Valider le formulaire</button>
            </div>
        </PiggyFormStyled>
    )
}

const PiggyFormStyled = styled.form`
    width: 100%;
    max-width: 20vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    z-index: 10;
    padding: 20px 15px;
    margin: 0 auto;

    background-color: ${theme.colors.greyBlue};
    border-radius: ${theme.borderRadius.round};

    .customdiv {
        width: 100%;

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
        min-width: 10vw;
        max-width: 20vw;
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
        font-size: 1vw;
        font-weight: 800;
        padding: 16px 25px;
        width: 100%;
        max-width: 20vw;
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
`;

const StyledSelect = styled(Select)`
    width: 100%;
    max-width: 20vw;
    padding: 0;
    margin: 0 auto;
    color: ${theme.colors.dark};
    font-size: 15px;

    .react-select__control {
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        padding-right: 32px; /* Ajouter un padding à droite pour laisser de l'espace pour la flèche */
        font-size: 14px;
        color: #333;
        outline: none;
        position: relative; /* Position relative pour le positionnement absolu de la flèche */
    }
    .react-select__menu {
        margin-top: 2px;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .react-select__option {
        padding: 8px;
        color: #333;
    }

    .react-select__option--is-selected {
        background-color: #007bff;
        color: white;
    }

    .react-select__option--is-focused {
        background-color: #007bff;
        color: white;
    }

    .react-select__single-value {
        color: #333;
    }
`;
