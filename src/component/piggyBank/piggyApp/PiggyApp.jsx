import TopButtons from "./TopButtons"
import PiggyTable from "./PiggyTable"
import TotalPrice from "./TotalPrice"
import CreationForm from "./CreationForm"

import styled from "styled-components";
import { theme } from "../../../theme/index"
import '../PiggyBank.css'

export default function PiggyApp() {
  return (
    <BudgetDivStyled id="piggy-content" className="piggy-content">
      <div className="section-table">
        <div>
          <h1>Bienvenue sur -nom- !</h1>
          <p>Votre gestionnaire de budget</p>
        </div>

        <hr />

        <TopButtons />
 
        <hr />

        <TotalPrice />

        <hr />

        <PiggyTable />

        <hr />
      </div>

      <div>
        <CreationForm />
      </div>
    </BudgetDivStyled>
  )
}

const BudgetDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
    color: ${theme.colors.greyMedium};
  }
  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.greyMedium};
  }
`;