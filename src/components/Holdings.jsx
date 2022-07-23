import { useContext } from "react"
import Data from "../contexts/contextData"
import HCard from "./HCard"

function Holdings() {
    let data = useContext(Data)
    return (
        <div className="holdings">
            <h2>Current Holdings</h2>
            <div className="holdings-list">
                {data.state.holdingCoinList.length === 0 && (<p>Go buy some 🚀</p>)}
                {data.state.holdingCoinList.length > 0 && (
                    data.state.holdingCoinList.map(coinData => <HCard key={coinData.time} {...coinData} />)
                )}
            </div>
        </div>
    )
}
export default Holdings