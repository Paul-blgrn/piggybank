import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../PiggyBank.css';

import { useContext } from 'react';
import PiggyBankContext from '../../../context/PiggyBankContext';
import { formatPrice } from "../../../utils/maths"

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
        <table className="table-piggy">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Quantité</th>
                    <th scope="col"><FontAwesomeIcon onClick={purgeTable} className="trashicon" icon={["fas", "fa-gear"]} /></th>
                </tr>
            </thead>

            <tbody>
                {
                item.map(({ id, name, desc, price, quantity }, index) => {
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{desc}</td>
                            <td className="price">{ formatPrice(price) }</td>
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
        </table>
    )
}
