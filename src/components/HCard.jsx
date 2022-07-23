function HCard({ name, coinHave, totalPayingPrice, curr_price, profit_loss }) {
    return (
        <div className="h-card">
            <p>{name}: {coinHave}</p>
            <p className="font">Total Paid:{parseFloat(totalPayingPrice.toFixed(2))}, Current Value: ${parseFloat((curr_price * coinHave).toFixed(2))}</p>
            {profit_loss > 0 && (<p className="greenfont">P/L: ${parseFloat(profit_loss.toFixed(2))} 🚀</p>)}
            {profit_loss <= 0 && (<p className="redfont">P/L: ${parseFloat(profit_loss.toFixed(2))} 🔻</p>)}
        </div>
    )
}
export default HCard