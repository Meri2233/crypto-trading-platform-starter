import { useContext } from "react"
import Data from "../contexts/contextData"

function Coin({ACTIONS}) {
    
    let data = useContext(Data)

    return (
        <div className="coins">
            <div onClick={() => data.dispatch({type: ACTIONS.BUYBITCOIN})} className="card-info">
                <img src={data.state.bitcoin.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.bitcoin.curr_price}</p>
                    <p className="name">{data.state.bitcoin.name}</p>
                    <p className="price-change">
                        Last 24h:&nbsp;
                        <span
                            style={{
                                color: data.state.bitcoin.price_change > 0 ? 'green' : 'red'
                            }}
                        >
                            {data.state.bitcoin.price_change}%
                        </span>
                    </p>
                </div>
            </div>
            <div onClick={() => data.dispatch({ type: ACTIONS.BUYETHEREUM })} className="card-info">
                <img src={data.state.ethereum.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.ethereum.curr_price}</p>
                    <p className="name">{data.state.ethereum.name}</p>
                    <p className="price-change">
                        Last 24h:&nbsp;
                        <span
                            style={{
                                color: data.state.ethereum.price_change > 0 ? 'green' : 'red'
                            }}
                        >
                            {data.state.ethereum.price_change}%
                        </span>
                    </p>
                </div>
            </div>
            <div onClick={() => data.dispatch({ type: ACTIONS.BUYDOGECOIN })} className="card-info">
                <img src={data.state.dogecoin.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.dogecoin.curr_price}</p>
                    <p className="name">{data.state.dogecoin.name}</p>
                    <p className="price-change">
                        Last 24h:&nbsp;
                        <span
                            style={{
                                color: data.state.dogecoin.price_change > 0 ? 'green' : 'red'
                            }}
                        >
                            {data.state.dogecoin.price_change}%
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin