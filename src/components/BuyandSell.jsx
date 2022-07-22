import { useContext } from "react"
import Data from "../contexts/contextData"

function BuyandSell({coinData, holdingCoinData, ACTIONS }) {

    let data = useContext(Data)

    return (
        <div className="buy-sell">
            {data.state.buy && (<>
                <div className="box">
                    <p className="box-header">Buy {coinData.name}</p>
                    <p className="price">Current Price: ${coinData.curr_price}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                        className="input-box"/>
                        <p className="max">Max: {data.state.money / coinData.curr_price}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will be charged for {data.state.buyingorSellingAmount * coinData.curr_price}</p>
                    )}
                    <button className="buy">Buy</button>
                    <button onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })} className="sell">Sell</button>
                    
                    <button className="big-buy-btn">Buy</button>
                </div>
            </>)}
            {!data.state.buy && (<>
                <div className="box">
                    <p className="box-header">Sell {coinData.name}</p>
                    <p className="price">Current Price: ${coinData.curr_price}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                            className="input-box" />
                        <p className="max">Max: {holdingCoinData.have}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will receive {data.state.buyingorSellingAmount * coinData.curr_price}</p>
                    )}
                    <button onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })} className="buy">Buy</button>
                    <button className="sell">Sell</button>

                    <button className="big-buy-btn">Sell</button>
                </div>
            </>)}

        </div>
    )
}

export default BuyandSell