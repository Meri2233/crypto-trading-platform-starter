import { useContext } from "react"
import Data from "../contexts/contextData"

function Coin() {
    
    let data = useContext(Data)

    return (
        <div className="coins">
            <div className="card-info">
                <img src={data.state.bitcoin.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.bitcoin.curr_price}</p>
                    <p className="name">{data.state.bitcoin.name}</p>
                    <p className="price_change">Last 24h: {data.state.bitcoin.price_change}%</p>
                </div>
            </div>
            <div className="card-info">
                <img src={data.state.ethereum.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.ethereum.curr_price}</p>
                    <p className="name">{data.state.ethereum.name}</p>
                    <p className="price_change">Last 24h: {data.state.ethereum.price_change}%</p>
                </div>
            </div>
            <div className="card-info">
                <img src={data.state.dogecoin.logo} alt="" />
                <div className="info">
                    <p className="price">${data.state.dogecoin.curr_price}</p>
                    <p className="name">{data.state.dogecoin.name}</p>
                    <p className="price_change">Last 24h: {data.state.dogecoin.price_change}%</p>
                </div>
            </div>
        </div>
    )
}

export default Coin