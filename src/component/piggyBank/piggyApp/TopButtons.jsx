import { useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../../context/GlobalContext";

import '../PiggyBank.css'


export default function Buttons() {

    const {showCreationForm, setShowCreationForm} = useContext(GlobalContext);
    

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

    const handleToggleCreationForm = useCallback(() =>{
      setShowCreationForm((prev) => !prev);
    }, [showCreationForm]);

    useEffect(() => {
      console.log("Nouvelle valeur de showCreationForm :", showCreationForm);
    }, [showCreationForm]);


  return (
    <div className="flexButtons">
        <button className="Piggybank-buttonBack" onClick={hideTable}>Fermer l'app</button>
        <button className="Piggybank-buttonBack" onClick={handleToggleCreationForm}>Ajouter un champ</button>
    </div>
  )
}
