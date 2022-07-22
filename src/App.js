import { useState } from "react";
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";


function App() {
  let [money,setMoney] = useState("100")
  let [value,setValue] = useState("0.00")

  return (
    <div style={{backgroundImage:'url(bg.svg)'}} className="App">
      <h3>Earn some virtual money 💰</h3>
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
