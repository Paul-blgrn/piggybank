import { useContext } from 'react';
import PiggyBankContext from '../../context/PiggyBankContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PiggyForm({ id, name, desc, price, quantity }) {
    const { item, setItem } = useContext(PiggyBankContext)

    const removeRow = (id) => {
        // console.log("objet supprimé: " + id)
        setItem([...item.filter((object) => object.id !== id)])
    };

  return (   
    <tr key={id}>
        <td>{name}</td>
        <td>{desc}</td>
        <td className="price">{price}</td>
        <td>{quantity}</td>
        <td><FontAwesomeIcon onClick={() => removeRow(id)} className="trashicon" icon={["fas", "fa-trash"]} /></td>
    </tr>
  )
}
