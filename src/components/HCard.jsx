function HCard({ name, coinHave, totalPayingPrice, curr_price, profit_loss }) {
    return (
        <div className="h-card">
            <p>{name}: {coinHave}</p>
            <p className="font">Total Paid:{totalPayingPrice.toFixed(2)}, Current Value: ${(curr_price * coinHave).toFixed(2)}</p>
            {profit_loss > 0 && (<p className="greenfont">P/L:${profit_loss} 🚀</p>)}
            {profit_loss <= 0 && (<p className="redfont">P/L:${profit_loss} 🔻</p>)}
        </div>
    )
}
export default HCard