import { useState } from "react";


function App() {
  let [money,setMoney] = useState(100)
  return (
    <div className="App">
      <h2>Earn some virtual money 💰</h2>
      <p>To buy virtual load</p>
      <p className="wallet">🏦 Wallet: ${money}</p>
    </div>
  );
}

export default App;
