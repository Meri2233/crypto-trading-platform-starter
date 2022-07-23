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
  UPDATEBUYORSELLAMOUNT: 'update-buyorsell',
  UPDATEVALUE: 'update-value',
  CLOSEPOPUP: 'close-popup',
  BUY: 'buy',
  SELL: 'sell'
}

function reducer(state, action) {

  let updated_data, newHoldingCoin, newTransaction, newValue, newBitcoin, newEthereum, newDogecoin, bol = true

  switch (action.type) {

    case ACTIONS.ISLOADING:
      return { ...state, isLoading: !state.isLoading }

    case ACTIONS.UPDATEBITCOIN:
      updated_data = {
        name: action.payload.name,
        coinHave: state.bitcoin.coinHave,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }

      newHoldingCoin = JSON.parse(JSON.stringify(state.holdingCoinList))
      for (let i = 0; i < newHoldingCoin.length; i++) {
        if (newHoldingCoin[i].name === action.payload.name) {
          newHoldingCoin[i].curr_price = action.payload.curr_price
          newHoldingCoin[i].profit_loss = Number(((action.payload.curr_price * newHoldingCoin[i].coinHave) / newHoldingCoin[i].totalPayingPrice) * 100) - 100
        }
      }
      return { ...state, bitcoin: updated_data, holdingCoinList: newHoldingCoin }

    case ACTIONS.UPDATEETHEREUM:
      updated_data = {
        name: action.payload.name,
        coinHave: state.ethereum.coinHave,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }

      newHoldingCoin = JSON.parse(JSON.stringify(state.holdingCoinList))
      for (let i = 0; i < newHoldingCoin.length; i++) {
        if (newHoldingCoin[i].name === action.payload.name) {
          newHoldingCoin[i].curr_price = action.payload.curr_price
          newHoldingCoin[i].profit_loss = Number(((action.payload.curr_price * newHoldingCoin[i].coinHave) / newHoldingCoin[i].totalPayingPrice) * 100) - 100
        }
      }
      return { ...state, ethereum: updated_data, holdingCoinList: newHoldingCoin }

    case ACTIONS.UPDATEDOGECOIN:
      updated_data = {
        name: action.payload.name,
        coinHave: state.dogecoin.coinHave,
        curr_price: action.payload.curr_price,
        price_change: action.payload.price_change,
        logo: action.payload.logo,
      }

      newHoldingCoin = JSON.parse(JSON.stringify(state.holdingCoinList))
      for (let i = 0; i < newHoldingCoin.length; i++) {
        if (newHoldingCoin[i].name === action.payload.name) {
          newHoldingCoin[i].curr_price = action.payload.curr_price
          newHoldingCoin[i].profit_loss = Number(((action.payload.curr_price * newHoldingCoin[i].coinHave) / newHoldingCoin[i].totalPayingPrice) * 100) - 100
        }
      }
      return { ...state, dogecoin: updated_data, holdingCoinList: newHoldingCoin }

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
      return { ...state, buy: !state.buy, sell: !state.sell, buyingorSellingAmount: 0 }

    case ACTIONS.UPDATEBUYORSELLAMOUNT:
      let newAmount = Number(action.payload)
      return { ...state, buyingorSellingAmount: newAmount }

    case ACTIONS.UPDATEVALUE:
      newBitcoin = JSON.parse(JSON.stringify(state.bitcoin))
      newEthereum = JSON.parse(JSON.stringify(state.ethereum))
      newDogecoin = JSON.parse(JSON.stringify(state.dogecoin))
      newValue = (newBitcoin.coinHave * newBitcoin.curr_price) + (newEthereum.coinHave * newEthereum.curr_price) + (newDogecoin.coinHave * newDogecoin.curr_price)
      return { ...state, totValue: newValue }

    case ACTIONS.CLOSEPOPUP:
      return { ...state, buyBitcoin: false, buyEthereum: false, buyDogecoin: false, buy: true, sell: false }

    case ACTIONS.BUY:
      newHoldingCoin = JSON.parse(JSON.stringify(state.holdingCoinList))
      newTransaction = JSON.parse(JSON.stringify(state.transactionList))
      newBitcoin = JSON.parse(JSON.stringify(state.bitcoin))
      newEthereum = JSON.parse(JSON.stringify(state.ethereum))
      newDogecoin = JSON.parse(JSON.stringify(state.dogecoin))
      newValue = state.totValue

      for (let i = 0; i < newHoldingCoin.length; i++) {
        if (newHoldingCoin[i].name === action.payload.name) {
          newHoldingCoin[i].totalPayingPrice += action.payload.payingPrice
          newHoldingCoin[i].coinHave += Number(action.payload.totalCoin)
          bol = false
        }
      }

      if (bol) {
        newHoldingCoin.push({
          name: action.payload.name,
          coinHave: Number(action.payload.totalCoin),
          totalPayingPrice: action.payload.payingPrice,
          curr_price: action.payload.buyingPrice,
          time: action.payload.time,
          profit_loss: 0.00,
        })
        newValue += action.payload.payingPrice
      }

      newTransaction.push({
        name: action.payload.name,
        totalCoin: Number(action.payload.totalCoin),
        curr_price: action.payload.buyingPrice,
        payingOrReceivingPrice: action.payload.payingPrice,
        time: action.payload.time,
        buying: true
      })

      action.payload.name === newBitcoin.name
        ? newBitcoin.coinHave += Number(action.payload.totalCoin)
        : action.payload.name === newEthereum.name
          ? newEthereum.coinHave += Number(action.payload.totalCoin)
          : newDogecoin.coinHave += Number(action.payload.totalCoin)

      return {
        ...state,
        bitcoin: newBitcoin,
        ethereum: newEthereum,
        dogecoin: newDogecoin,
        holdingCoinList: newHoldingCoin,
        transactionList: newTransaction,
        money: state.money - action.payload.payingPrice,
        totValue: newValue,
        buyingorSellingAmount: 0,
        buy: true, sell: false,
        buyBitcoin: false, buyEthereum: false, buyDogecoin: false,
        sellBitcoin: false, sellEthereum: false, sellDogecoin: false,
      }

    case ACTIONS.SELL:
      newHoldingCoin = JSON.parse(JSON.stringify(state.holdingCoinList))
      newTransaction = JSON.parse(JSON.stringify(state.transactionList))
      newBitcoin = JSON.parse(JSON.stringify(state.bitcoin))
      newEthereum = JSON.parse(JSON.stringify(state.ethereum))
      newDogecoin = JSON.parse(JSON.stringify(state.dogecoin))

      for (let i = 0; i < newHoldingCoin.length; i++) {
        if (newHoldingCoin[i].name === action.payload.name) {
          newHoldingCoin[i].totalPayingPrice -= action.payload.receivingPrice
          newHoldingCoin[i].coinHave -= Number(action.payload.totalCoin)
        }
      }

      newTransaction.push({
        name: action.payload.name,
        totalCoin: Number(action.payload.totalCoin),
        curr_price: action.payload.sellingPrice,
        payingOrReceivingPrice: action.payload.receivingPrice,
        time: action.payload.time,
        buying: false
      })

      action.payload.name === newBitcoin.name
        ? newBitcoin.coinHave -= Number(action.payload.totalCoin)
        : action.payload.name === newEthereum.name
          ? newEthereum.coinHave -= Number(action.payload.totalCoin)
          : newDogecoin.coinHave -= Number(action.payload.totalCoin)

      return {
        ...state,
        bitcoin: newBitcoin,
        ethereum: newEthereum,
        dogecoin: newDogecoin,
        holdingCoinList: newHoldingCoin,
        transactionList: newTransaction,
        money: state.money + action.payload.receivingPrice,
        buyingorSellingAmount: 0,
        buy: true, sell: false,
        buyBitcoin: false, buyEthereum: false, buyDogecoin: false,
        sellBitcoin: false, sellEthereum: false, sellDogecoin: false,
      }

    default:
      return state;
  }
}

function App() {

  let [state, dispatch] = useReducer(reducer, {
    money: 100.00, totValue: 0.00, isLoading: false,
    bitcoin: { name: null, coinHave: 0, curr_price: null, price_change: null, logo: null },
    ethereum: { name: null, coinHave: 0, curr_price: null, price_change: null, logo: null },
    dogecoin: { name: null, coinHave: 0, curr_price: null, price_change: null, logo: null },
    buyBitcoin: false, buyEthereum: false, buyDogecoin: false,
    sellBitcoin: false, sellEthereum: false, sellDogecoin: false,
    holdingCoinList: [], transactionList: [], buy: true, sell: false,
    buyingorSellingAmount: 0,
  })

  useEffect(() => {
    dispatch({ type: ACTIONS.ISLOADING })
    setInterval(() => {
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
      dispatch({ type: ACTIONS.UPDATEVALUE })
    }, 5000);
    dispatch({ type: ACTIONS.ISLOADING })
  }, [])

  return (

    <Data.Provider value={{ state, dispatch }}>
      <div className="App">
        <h2>Earn some virtual money 💰</h2>
        <p className="second-header">To buy virtual load 🍕</p>
        <p className="wallet">🏦 Wallet: ${parseFloat(state.money.toFixed(2))}</p>
        <p className="portfolio">Portfolio Value:${parseFloat(state.totValue.toFixed(2))}</p>

        {state.isLoading && (<div className="Loading-Page">Fetching...</div>)}
        {!state.isLoading && (<div className="coin-card"><Coin ACTIONS={ACTIONS} /></div>)}

        {(state.buyBitcoin || state.buyEthereum || state.buyDogecoin)
          &&
          (<BuyandSell
            coinData={state.buyBitcoin ? state.bitcoin : state.buyEthereum ? state.ethereum : state.dogecoin}
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
