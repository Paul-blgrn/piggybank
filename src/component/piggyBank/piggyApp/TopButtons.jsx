import { useContext, useState } from "react";
import TotalPriceContext from "../../../context/TotalPriceContext";
import { useNavigate } from "react-router-dom";

import '../PiggyBank.css'


export default function Buttons() {

    const [ showCreationForm, setShowCreationForm ] = useState(false);
    const { totalPrice } = useContext(TotalPriceContext)

    // navigation to return back
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };

    const hideTable = () => {
      const appHeader = document.getElementById('piggy-head');
      const appBody = document.getElementById('piggy-content');
      // set piggy-head visible
      appHeader.classList.remove('hidden')
      appHeader.classList.add('visible')
  
      // set piggy-content invisible
      appBody.classList.remove('visible')
      appBody.classList.add('hidden')
    }

    const alertPiggy = () => {
      alert("Le total de mon compte est de : " + totalPrice + " €");
    };

    const creationForm = () => {
      const appForm = document.getElementById('creationForm')

      if (!showCreationForm) {

        appForm.classList.remove('hiddenform')
        appForm.classList.add('visibleform')

      } else {

        appForm.classList.add('hiddenform')
        appForm.classList.remove('visibleform')

      }
      setShowCreationForm(!showCreationForm)
    }
  return (
    <div className="flexButtons">
        <button className="Piggybank-buttonBack" onClick={handleGoBack}>Accueil</button>
        <button className="Piggybank-buttonBack" onClick={hideTable}>PiggyBank</button>
        <button className="Piggybank-buttonBack" onClick={alertPiggy}>Alert Montant</button>
        <button className="Piggybank-buttonBack" onClick={creationForm}>Ajouter un champ</button>
    </div>
  )
}
