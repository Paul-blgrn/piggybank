import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../PiggyBank.css';

import { useContext } from 'react';
import PiggyBankContext from '../../../context/PiggyBankContext';
import { formatPrice } from "../../../utils/maths"

import styled from "styled-components";
import { theme } from "../../../theme/index"
import '../PiggyBank.css'

export default function PiggyTable() {
    const { item, setItem } = useContext(PiggyBankContext);
    
    const purgeTable = () => {
        // delete all elements inside tbody
        setItem([...item.filter((itemList) => itemList.id === null )])
    };

    const removeRow = (id) => {
        // console.log("objet supprimé: " + id)
        setItem([...item.filter((object) => object.id !== id)])
    };

    return (
        <StyledTableWrapper>
            <StyledTable className="table-piggy">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Type</th>
                        <th scope="col">Quantité</th>
                        <th scope="col"><FontAwesomeIcon onClick={purgeTable} className="trashicon" icon={["fa", "fa-minus-square"]} /></th>
                    </tr>
                </thead>

                <tbody className="budget-tbody">
                    {
                    item.map(({ id, name, desc, price, type, quantity }, index) => {
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{desc}</td>
                                <td className="price">{ formatPrice(price) }</td>
                                <td>{type}</td>
                                <td>{quantity}</td>
                                <td>
                                    <FontAwesomeIcon 
                                        onClick={() => removeRow(id)} 
                                        className="trashicon" 
                                        icon={["fas", "fa-trash"]} 
                                    />
                                </td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    )
}

const StyledTableWrapper = styled.div`
    width: 65vw;
    overflow-x: hidden;
    margin: 0 auto;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 0 auto;
    table-layout: fixed;
    direction: rtl;
    scrollbar-width: none;

    thead {
        display: table;
        table-layout: fixed;
        width: calc(100% - 17px); /* Adjust width to account for scrollbar */
        direction: ltr;
    }

    .scroll-container {
        direction: ltr;
    }

    tbody {
        display: block;
        max-height: 500px; /* Adjust the max-height as needed */
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        direction: rtl;
    }

    th, td {
        border: 1px solid white;
        padding: 10px 20px;
        width: 100%;
    }

    thead th {
        background-color: ${theme.colors.greyBlue};
        position: sticky;
        top: 0;
        z-index: 2;
    }

    .budget-tbody tr {
        display: table;
        table-layout: fixed;
        width: calc(100% - 17px);
        direction: ltr;
        font-size: 1.1vw;
        color: black;
        font-weight: bold;
        scrollbar-width: none;
    }

    .budget-tbody::-webkit-scrollbar {
        display: none;
    }

    .budget-tbody tr:nth-child(odd) {
        background-color: ${theme.colors.greyLight};
    }

    .budget-tbody tr:nth-child(even) {
        background-color: ${theme.colors.greyMedium};
    }
`;