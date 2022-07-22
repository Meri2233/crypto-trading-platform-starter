import { useReducer, useEffect } from "react";
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";

const ACTIONS={
  ISLOADING: 'isLoading',
  UPDATEBITCOIN: 'update_bitcoin',
  UPDATEETHEREUM: 'update_ethereum',
  UPDATEDOGECOIN: 'update_dogecoin'
}

function reducer(state, action) {

  let updated_data

  switch (action.type) {

    case ACTIONS.ISLOADING:
      return { ...state, isLoading: !state.isLoading }
    
    case ACTIONS.UPDATEBITCOIN:
      updated_data = {
        name: action.payload.name,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }
      return { ...state, bitcoin: updated_data }
    
    case ACTIONS.UPDATEETHEREUM:
      updated_data = {
        name: action.payload.name,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }
      return { ...state, ethereum: updated_data }
    
    case ACTIONS.UPDATEDOGECOIN:
      updated_data = {
        name: action.payload.name,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }
      return { ...state, dogecoin: updated_data }
    
    default:
      return state;
  }
}

function App() {

  let [state, dispatch] = useReducer(reducer, {
    money: 100, value: 0.00, isLoading: false,
    bitcoin: { name: null, curr_price: null, price_change: null, logo: null },
    ethereum: { name: null, curr_price: null, price_change: null, logo: null},
    dogecoin: { name: null, curr_price: null, price_change: null, logo: null }
  })

  useEffect(() => {
    dispatch({type: ACTIONS.ISLOADING})
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.UPDATEBITCOIN, payload: {
            name: data.name,
            curr_price: data.market_data.current_price.usd,
            price_change: data.market_data.price_change_percentage_24h,
            logo: data.image.small,
          }
        })
      })
    fetch('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.UPDATEETHEREUM, payload: {
            name: data.name,
            curr_price: data.market_data.current_price.usd,
            price_change: data.market_data.price_change_percentage_24h,
            logo: data.image.small,
          }
        })
      })
    fetch('https://api.coingecko.com/api/v3/coins/dogecoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.UPDATEDOGECOIN, payload: {
            name: data.name,
            curr_price: data.market_data.current_price.usd,
            price_change: data.market_data.price_change_percentage_24h,
            logo: data.image.small,
          }
        })
      })
    setTimeout(() => dispatch({ type: ACTIONS.ISLOADING }), 500)
  }, []) 

  return state.isLoading ? <div className="Loading-Page">Loading...</div> : (
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
