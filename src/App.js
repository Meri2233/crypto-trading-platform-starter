<<<<<<< HEAD
import { useReducer, useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 81a1ab3115d3809d5ac8cea25f08c46aa7dedb1f
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";

const ACTIONS={

}
 
function reducer(){

}

// function reducer(state, action) {
  
// }


function App() {
<<<<<<< HEAD
  let [state,dispatch]= useReducer(reducer,{money:"100",value:"0.00"})
=======

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
>>>>>>> 81a1ab3115d3809d5ac8cea25f08c46aa7dedb1f

  return isLoading ? <div className="Loading-Page">Loading...</div> : (
    <div style={{backgroundImage:'url(bg.svg)'}} className="App">
      <h2>Earn some virtual money 💰</h2>
      <p className="font">To buy virtual load</p>
      <p className="wallet">🏦 Wallet: ${state.money}</p>
      <p className="portfolio">Portfolio Value:${state.value}</p>
      <div className="records">
        <Holdings/>
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
