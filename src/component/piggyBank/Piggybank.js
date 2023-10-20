import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import store from "../../store/Store";
import { Provider } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PiggyBank.css';

//import Cart from "./component/Cart";

const Piggybank = () => {
    // change page title here
    useEffect(() => {
      getAllPrice(0);
      document.title = 'Piggy Bank - PiggyBank';
    }, []);

    // navigation to return back
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };


    const launchApp = () => {
      const appHeader = document.getElementById('piggy-head');
      const appBody = document.getElementById('piggy-content');

      // set piggy-head invisible
      appHeader.style.setProperty('visibility', 'hidden');
      appHeader.style.setProperty('display', 'none');

      // set piggy-content visible
      appBody.style.setProperty('visibility', 'visible');
      appBody.style.setProperty('display', 'block');
    };

    const launchPiggyHome = () => {
      const appHeader = document.getElementById('piggy-head');
      const appBody = document.getElementById('piggy-content');

      // set piggy-head visible
      appHeader.style.setProperty('visibility', 'visible');
      appHeader.style.setProperty('display', 'block');

      // set piggy-content invisible
      appBody.style.setProperty('visibility', 'hidden');
      appBody.style.setProperty('display', 'none');
    };

    const [data, setdata] = useState([
      {name: "Salaire", desc: "Entreprise", price:"1600"},
      {name: "Transport", desc: "Abonnement mensuel", price:"-50"},
      {name: "Restaurant", desc: "Burger King", price:"-30"},
    ]);

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [totalPrice, setTotalPrice] = useState();

    const alertPiggy = () => {
      let result = 0;
      const allPrice = document.getElementsByClassName("price");

      for (let i=0; i<allPrice.length ; i++) {
        result += Number(allPrice[i].textContent)
      }
      alert("Le total de mon compte est de : " + result + " €");
    };

    const getAllPrice = () => {
      // calculate prices
      const sum = data.map(data => Number(data.price)).reduce((a,b) => a+b, 0);
      setTotalPrice(sum);
      const divSum = document.querySelector("#divsum");
      divSum.innerText = "Le total de mon compte est de : " + sum +" €";
      //log number in console
      // console.log(sum);

      // let result = 0;
      // const allPrice = document.getElementsByClassName("price");

      // for (let i=0; i<allPrice.length ; i++) {
      //   result += Number(allPrice[i].textContent)
      // }
      // let message = "Le total de mon compte est de : " + result +" €";
      // const divSum = document.getElementById('sum');
      // divSum.getElementsByTagName('p').namedItem('divsum').textContent = message;
    };

    const removeRow = (index) => {
      const updateData = [...data];
      updateData.splice(index, 1);
      setdata(updateData);
      getAllPrice();
    };

    const purgeTable = () => {
      // delete all elements inside tbody
      let purgeTable = document.querySelectorAll('tbody');
      if(purgeTable) {
        for (let i=0; i<purgeTable.length; i++) {
          purgeTable[i].remove();
        }
      }

      //reset price
      getAllPrice();
      //alert("Tableau vidé !");
    };

    return (
      <div className="App">
        <header className="App-header">
        {/* body */}

        {/* DIV ID piggy-home */}
        <div id="piggy-head" className="piggy-head">
          <div className="Piggy-Container">
            <h1 id="Piggy-main-title">My Piggy Bank</h1>
          </div>
        
          <p>
            Bienvenue <strong>User</strong>
          </p>

          <hr/>

          <div>
            <button className="Piggybank-buttonApp" onClick={launchApp}>Lancer l'App</button>
            <button className="Piggybank-buttonBack" onClick={handleGoBack}>Retour</button>
          </div>
          <Provider store={store}>
            {/* <Cart />*/}
          </Provider>
        </div>

        {/* DIV ID piggy-content */}
        <div id="piggy-content" className="piggy-content">
          <h1>My piggy bank</h1>

          <hr />

          <button className="Piggybank-buttonBack" onClick={handleGoBack}>Accueil</button>
          <button className="Piggybank-buttonBack" onClick={launchPiggyHome}>PiggyBank</button>
          <button className="Piggybank-buttonBack" onClick={alertPiggy}>Alert Montant</button>

          <hr />

          {/* show piggybank table */}
          <div className="section-table">
            <table className="table-piggy">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                        <th scope="col"><FontAwesomeIcon onClick={purgeTable} className="trashicon" icon={["fas", "fa-gear"]} /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.desc}</td>
                                    <td className="price">{item.price}</td>
                                    <td><FontAwesomeIcon onClick={() => removeRow(index)} className="trashicon" icon={["fas", "fa-trash"]} /></td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>

            <hr />

            <div id="sum">
                <p id="divsum"></p>
            </div>
          </div>



        </div>
        {/* end body */}
        </header>
      </div>
    );
};

export default Piggybank;