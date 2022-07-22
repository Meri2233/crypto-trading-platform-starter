
function HCard({points,paidamount,valueneeded,amount}){
    return (
        <div className="h-card">
            <p>{coinname}: {points}</p>
            <p className="font">Total Paid:{paidamount}, Current Value: ${valueneeded}</p>
            <p className="greenfont">P/L:${amount}</p>
        </div>
    )
}

export default HCard