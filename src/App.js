import { useReducer, useState } from "react";
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";

const ACTIONS={

}
 
function reducer(){

}

function App() {
  let [state,dispatch]= useReducer(reducer,{money:"100",value:"0.00"})

  return (
    <div className="App">
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
