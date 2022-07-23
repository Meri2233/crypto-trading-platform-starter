import { useContext } from "react"
import Data from "../contexts/contextData"

function BuyandSell({ coinData, ACTIONS }) {

    let data = useContext(Data)

    return (
        <div className="buy-sell">
            {data.state.buy && (<>
                <div className="box">
                    <p className="box-header">Buy {coinData.name}
                        <button onClick={() => data.dispatch({ type: ACTIONS.CLOSEPOPUP })} className="close">X</button>
                    </p>
                    <p className="price">Current Price: ${coinData.curr_price.toFixed(6)}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                            className="input-box" />
                        <p className="max">Max: {(data.state.money / coinData.curr_price).toFixed(6)}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will be charged for {(data.state.buyingorSellingAmount * coinData.curr_price).toFixed(2)}</p>
                    )}
                    <button className="buy">Buy</button>
                    <button onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })} className="sell">Sell</button>

                    <button
                        onClick={() => data.dispatch({
                            type: ACTIONS.BUY,
                            payload: {
                                name: coinData.name,
                                totalCoin: data.state.buyingorSellingAmount,
                                buyingPrice: coinData.curr_price,
                                payingPrice: (data.state.buyingorSellingAmount * coinData.curr_price),
                                time: Date().toString().substring(0, 24),
                            }
                        })}
                        disabled={(data.state.buyingorSellingAmount * coinData.curr_price) > data.state.money ? true : false}
                        className="big-buy-btn"
                    >
                        Buy
                    </button>
                </div>
            </>)}
            {!data.state.buy && (<>
                <div className="box">
                    <p className="box-header">Sell {coinData.name}
                        <button onClick={() => data.dispatch({ type: ACTIONS.CLOSEPOPUP })} className="close">X</button>
                    </p>
                    <p className="price">Current Price: ${coinData.curr_price.toFixed(6)}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                            className="input-box" />
                        <p className="max">Max: {coinData.coinHave}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will receive {data.state.buyingorSellingAmount * coinData.curr_price}</p>
                    )}
                    <button onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })} className="buy">Buy</button>
                    <button className="sell">Sell</button>

                    <button
                        onClick={() => data.dispatch({
                            type: ACTIONS.SELL,
                            payload: {
                                name: coinData.name,
                                totalCoin: data.state.buyingorSellingAmount,
                                sellingPrice: coinData.curr_price,
                                receivingPrice: (data.state.buyingorSellingAmount * coinData.curr_price),
                                time: Date().toString().substring(0, 24),
                            }
                        })}
                        disabled={(data.state.buyingorSellingAmount > coinData.have) ? true : false} className="big-buy-btn">Sell</button>
                </div>
            </>)}

        </div>
    )
}

export default BuyandSell