import TopButtons from "./TopButtons"
import PiggyTable from "./PiggyTable"
import TotalPrice from "./TotalPrice"
import CreationForm from "./CreationForm"

export default function PiggyApp() {
  return (
    <div id="piggy-content" className="piggy-content hidden">
        <div className="section-table">
            <h1>Welcome to Piggybank !</h1>
            <hr />
            <TopButtons />
            <hr />
            <PiggyTable />
            <hr />
            <TotalPrice />
            <hr />
            <CreationForm />
        </div>
    </div>
  )
}
