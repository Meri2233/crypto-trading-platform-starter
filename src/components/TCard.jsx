function TCard({ name, totalCoin, curr_price, payingOrReceivingPrice, time, buying }) {
    return (
        <div className="tCard">
            {buying && (
                <div className="buying">
                    <p>{name} - {totalCoin} @${curr_price}</p>
                    <p className="font">Paid: ${parseFloat(payingOrReceivingPrice.toFixed(2))}</p>
                    <p>Brought on: {time}</p>
                </div>
            )}
            {!buying && (
                <div className="selling">
                    <p>{name} - {totalCoin} @${curr_price}</p>
                    <p className="font">Received: ${parseFloat(payingOrReceivingPrice.toFixed(2))}</p>
                    <p>Sold on: {time}</p>
                </div>
            )}
        </div>
    )
}

export default TCard