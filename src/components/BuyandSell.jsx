import { useContext } from "react"
import Data from "../contexts/contextData"

function BuyandSell({ coinData, ACTIONS }) {

    let data = useContext(Data)

    return (
        <div className="buy-sell">
            {data.state.buy && (
                <div className="box">
                    <p className="box-header">Buy {coinData.name}
                        <button onClick={() => data.dispatch({ type: ACTIONS.CLOSEPOPUP })} className="close">X</button>
                    </p>
                    <p className="curr-price">Current Price: ${parseFloat(coinData.curr_price.toFixed(6))}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                            className="input-box"
                            defaultValue={0} />
                        <p className="max">Max: {parseFloat((data.state.money / coinData.curr_price).toFixed(6))}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will be charged for {parseFloat((data.state.buyingorSellingAmount * coinData.curr_price).toFixed(2))}</p>
                    )}
                    <div className="btn">
                        <button className="buysell" style={{ backgroundColor: data.state.buy ? '#0167FD' : 'transparent', outlineColor: data.state.buy ? '#0167FD' : 'gray' }}></button>
                        <p className="text">Buy</p>
                    </div>
                    <div className="btn">
                        <button style={{ backgroundColor: data.state.sell ? '#0167FD' : 'transparent', outlineColor: data.state.sell ? '#0167FD' : 'gray' }} onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })} className="buysell"></button>
                        <p className="text">Sell</p>
                    </div>
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
                        disabled={((data.state.buyingorSellingAmount <= 0) || ((data.state.buyingorSellingAmount * coinData.curr_price) > data.state.money)) ? true : false}
                        className="big-buysell-btn"
                    >
                        Buy
                    </button>
                </div>
            )}
            {!data.state.buy && (
                <div className="box">
                    <p className="box-header">Sell {coinData.name}
                        <button onClick={() => data.dispatch({ type: ACTIONS.CLOSEPOPUP })} className="close">X</button>
                    </p>
                    <p className="curr-price">Current Price: ${parseFloat(coinData.curr_price.toFixed(6))}</p>
                    <div className="input">
                        <input
                            onChange={(e) =>
                                data.dispatch({ type: ACTIONS.UPDATEBUYORSELLAMOUNT, payload: e.target.value })}
                            type="number"
                            className="input-box"
                            defaultValue={0} />
                        <p className="max">Max: {coinData.coinHave}</p>
                    </div>
                    {data.state.buyingorSellingAmount > 0 && (
                        <p className="msg">You will receive {parseFloat(data.state.buyingorSellingAmount * coinData.curr_price)}</p>
                    )}

                    <div className="btn">
                        <button className="buysell" style={{ backgroundColor: data.state.buy ? '#0167FD' : 'transparent', outlineColor: data.state.buy ? '#0167FD' : 'gray' }} onClick={() => data.dispatch({ type: ACTIONS.BUYORSELL })}></button>
                        <p className="text">Buy</p>
                    </div>
                    <div className="btn">
                        <button style={{ backgroundColor: data.state.sell ? '#0167FD' : 'transparent', outlineColor: data.state.sell ? '#0167FD' : 'gray' }} className="buysell"></button>
                        <p className="text">Sell</p>
                    </div>
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
                        disabled={((data.state.buyingorSellingAmount <= 0) || (data.state.buyingorSellingAmount > coinData.have)) ? true : false}
                        className="big-buysell-btn"
                    >
                        Sell
                    </button>
                </div>
            )}

        </div>
    )
}

export default BuyandSell