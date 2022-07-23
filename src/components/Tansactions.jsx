import { useContext } from "react"
import Data from "../contexts/contextData"
import TCard from './TCard'

function Transactions() {
    let data = useContext(Data)
    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <div className="transactions-list">
                {data.state.transactionList.length === 0 && (<p>No Transactions yet...</p>)}
                {data.state.transactionList.length > 0 && (
                    data.state.transactionList.map(coinData => <TCard key={coinData.time} {...coinData} />)
                )}
            </div>
        </div>
    )
}
export default Transactions