import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };

    const showTable = () => {
        const appHeader = document.getElementById('piggy-head');
        const appBody = document.getElementById('piggy-content');
        // set piggy-head invisible
        appHeader.classList.remove('visible')
        appHeader.classList.add('hidden')

        // set piggy-content visible
        appBody.classList.remove('hidden')
        appBody.classList.add('visible')
    }

    return (
        <div id="piggy-head" className="piggy-head hidden">
            <div className="Piggy-Container">
                <h1 id="Piggy-main-title">Mon Budget</h1>
            </div>
        
            <p>
                Bienvenue <strong>User</strong>
            </p>

            <hr/>

            <div>
                <button className="Piggybank-buttonApp" onClick={showTable}>Lancer l'App</button>
                <button className="Piggybank-buttonBack" onClick={handleGoBack}>Retour</button>
            </div>
        </div>
    )
}
