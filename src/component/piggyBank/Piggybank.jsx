import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import store from "../../store/Store";
import { Provider } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PiggyBank.css';
import PiggyBankContext from "../../context/PiggyBankContext";
import PiggyForm from "./PiggyForm";
import TotalPrice from "./TotalPrice";
import TotalPriceContext from "../../context/TotalPriceContext";
import CreationForm from "./CreationForm";

//import Cart from "./component/Cart";

export default function Piggybank() {
    const [ showForm, setShowForm ] = useState(false);
    const [ showCreationForm, setShowCreationForm ] = useState(false);
    const { item, setItem } = useContext(PiggyBankContext);
    const { totalPrice } = useContext(TotalPriceContext)

    // navigation to return back
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };

    const switchApp = () => {
      const appHeader = document.getElementById('piggy-head');
      const appBody = document.getElementById('piggy-content');

      if (showForm) {
        // set piggy-head visible
        
        appHeader.classList.remove('hidden')
        appHeader.classList.add('visible')


        // set piggy-content invisible
        
        appBody.classList.remove('visible')
        appBody.classList.add('hidden')

      } else {
        // set piggy-head invisible
        
        appHeader.classList.remove('visible')
        appHeader.classList.add('hidden')

        // set piggy-content visible
        
        appBody.classList.remove('hidden')
        appBody.classList.add('visible')

      }
      setShowForm(!showForm)
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

    const purgeTable = () => {
      // delete all elements inside tbody
      setItem([...item.filter((itemList) => itemList.id === null )])
    };

    // change page title here
    useEffect(() => {
      document.title = 'Piggy Bank - PiggyBank';
    }, []);

    return (
      <div className="App">
        <header className="App-header">
        {/* body */}

        {/* DIV ID piggy-home */}
        <div id="piggy-head" className="piggy-head hidden">
          <div className="Piggy-Container">
            <h1 id="Piggy-main-title">My Piggy Bank</h1>
          </div>
        
          <p>
            Bienvenue <strong>User</strong>
          </p>

          <hr/>

          <div>
            <button className="Piggybank-buttonApp" onClick={switchApp}>Lancer l'App</button>
            <button className="Piggybank-buttonBack" onClick={handleGoBack}>Retour</button>
          </div>
          <Provider store={store}>
            {/* <Cart />*/}
          </Provider>
        </div>

        {/* DIV ID piggy-content */}
        <div id="piggy-content" className="piggy-content visible">
          <h1>My piggy bank</h1>

          <hr />

          <div className="flexButtons">
            <button className="Piggybank-buttonBack" onClick={handleGoBack}>Accueil</button>
            <button className="Piggybank-buttonBack" onClick={switchApp}>PiggyBank</button>
            <button className="Piggybank-buttonBack" onClick={alertPiggy}>Alert Montant</button>
            <button className="Piggybank-buttonBack" onClick={creationForm}>Ajouter un champ</button>
          </div>

          <hr />

          {/* show piggybank table */}
          <div className="section-table">
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
                        <PiggyForm 
                          key={index}
                          id={id} 
                          name={name}
                          desc={desc}
                          price={price}
                          quantity={quantity}
                        />
                      )
                    })
                  }

                </tbody>
            </table>

            <hr />

            <TotalPrice />
            <CreationForm />
          </div>



        </div>
        {/* end body */}
        </header>
      </div>
    );
};