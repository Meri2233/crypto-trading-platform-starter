function TCard({ name, totalCoin, curr_price, payingOrReceivingPrice, time, buying }) {
    return (
        <div className="t-card">
            {buying && (
                <div className="buying">
                    <p>{name} - {totalCoin} @${curr_price}</p>
                    <p className="font">Paid: ${payingOrReceivingPrice.toFixed(2)}</p>
                    <p className="greenfont">Brought on: {time}</p>
                </div>
            )}
            {!buying && (
                <div className="selling">
                    <p>{name} - {totalCoin} @${curr_price}</p>
                    <p className="font">Received: ${payingOrReceivingPrice.toFixed(2)}</p>
                    <p className="redfont">Sold on: {time}</p>
                </div>
            )}
        </div>
    )
}

export default TCard