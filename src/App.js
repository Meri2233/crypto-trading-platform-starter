import { useReducer, useEffect } from "react";
import BuyandSell from "./components/BuyandSell";
import Coin from "./components/Coin";
import Holdings from "./components/Holdings";
import Transactions from "./components/Tansactions";
import Data from "./contexts/contextData";

const ACTIONS = {
  ISLOADING: 'isLoading',
  UPDATEBITCOIN: 'update_bitcoin',
  UPDATEETHEREUM: 'update_ethereum',
  UPDATEDOGECOIN: 'update_dogecoin',
  BUYBITCOIN: 'buy-bitcoin',
  BUYETHEREUM: 'buy-ethereum',
  BUYDOGECOIN: 'buy-dogecoin',
  SELLBITCOIN: 'sell-bitcoin',
  SELLETHEREUM: 'sell-ethereum',
  SELLDOGECOIN: 'sell-dogecoin',
  BUYORSELL: 'buy-sell',
  UPDATEBUYORSELLAMOUNT: 'update-buyorsell'
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

    case ACTIONS.BUYBITCOIN:
      return { ...state, buyBitcoin: !state.buyBitcoin, buyEthereum: false, buyDogecoin: false }

    case ACTIONS.BUYETHEREUM:
      return { ...state, buyBitcoin: false, buyEthereum: !state.buyEthereum, buyDogecoin: false }

    case ACTIONS.BUYDOGECOIN:
      return { ...state, buyBitcoin: false, buyEthereum: false, buyDogecoin: !state.buyDogecoin }
    
    case ACTIONS.SELLBITCOIN:
      return { ...state, sellBitcoin: !state.sellBitcoin, sellEthereum: false, sellDogecoin: false }

    case ACTIONS.SELLETHEREUM:
      return { ...state, sellBitcoin: false, sellEthereum: !state.sellEthereum, sellDogecoin: false }

    case ACTIONS.SELLDOGECOIN:
      return { ...state, sellBitcoin: false, sellEthereum: false, sellDogecoin: !state.buyDogecoin }
      
    case ACTIONS.BUYORSELL:
      return { ...state, buy: !state.buy, sell: !state.sell }
    
    case ACTIONS.UPDATEBUYORSELLAMOUNT:
      let newAmount = action.payload
      return { ...state, buyingorSellingAmount: newAmount}

    default:
      return state;
  }
}

function App() {

  let [state, dispatch] = useReducer(reducer, {
    money: 100, value: 0.00, isLoading: false,
    bitcoin: { name: null, curr_price: null, price_change: null, logo: null },
    ethereum: { name: null, curr_price: null, price_change: null, logo: null },
    dogecoin: { name: null, curr_price: null, price_change: null, logo: null },
    buyBitcoin: false, buyEthereum: false, buyDogecoin: false,
    sellBitcoin: false, sellEthereum: false, sellDogecoin: false,
    bitcoinHolding: { have: 0, total_price: 0, curr_value: 0 },
    ethereumHolding: { have: 0, total_price: 0, curr_value: 0 },
    dogecoinHolding: { have: 0, total_price: 0, curr_value: 0 },
    holdingCoin: [], transaction: [], buy: true, sell: false,
    buyingorSellingAmount: 0,
  })

  useEffect(() => {
    dispatch({ type: ACTIONS.ISLOADING })
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

  return (

    <Data.Provider value={{ state, dispatch }}>
      <div style={{ backgroundImage: 'url(bg.svg)' }} className="App">
        <h2>Earn some virtual money 💰</h2>
        <p className="font">To buy virtual load</p>
        <p className="wallet">🏦 Wallet: ${state.money}</p>
        <p className="portfolio">Portfolio Value:${state.value}</p>
        {state.isLoading && (<div className="Loading-Page">Loading...</div>)}
        {!state.isLoading && (
          <div className="coin-card">
            <Coin ACTIONS={ACTIONS} />
          </div>
        )}
        {(state.buyBitcoin || state.buyEthereum || state.buyDogecoin) && (<BuyandSell
          coinData={state.buyBitcoin ? state.bitcoin : state.buyEthereum ? state.ethereum : state.dogecoin}
          holdingCoinData={state.buyBitcoin ? state.bitcoinHolding : state.buyEthereum ? state.ethereumHolding : state.dogecoinHolding}
          ACTIONS={ACTIONS}
        />)}
        <div className="records">
          <Holdings />
          <Transactions />
        </div>
      </div>
    </Data.Provider>
  );
}

export default App;
