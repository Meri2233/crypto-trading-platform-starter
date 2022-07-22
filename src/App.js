import { useEffect, useState } from "react";
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";


// function reducer(state, action) {
  
// }


function App() {

  // let [state, dispatch] = useReducer(reducer, {money: 100, value: 0.00})

  useEffect(() => {
    // setisLoading(true)
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.market_data.current_price.usd)
        console.log(data.market_data.price_change_percentage_24h)
        console.log(data.image.small)

      })
    // setTimeout(() => setisLoading(false), 500)
  }, []) 

  let [isLoading, setisLoading] = useState(false)
  let [money,setMoney] = useState("100")
  let [value,setValue] = useState("0.00")

  return isLoading ? <div className="Loading-Page">Loading...</div> : (
    <div style={{backgroundImage:'url(bg.svg)'}} className="App">
      <h2>Earn some virtual money 💰</h2>
      <p className="font">To buy virtual load</p>
      <p className="wallet">🏦 Wallet: ${money}</p>
      <p className="portfolio">Portfolio Value:${value}</p>
      <div className="records">
        <Holdings/>
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
