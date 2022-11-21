import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import style from './FinanceComponent.module.css'
const FinanceComponent = () => {
    const [data, setData] = useState([0])
    const socket = io('http://localhost:4000/');

    socket.on('connect', () => console.log(socket.connected));
    socket.emit('start')

    useEffect(() => {
        socket.on('ticker', function (quotes) {
            const res = quotes.map(function (item) {
                return <ul key={item.id}>
                    <li>change: {item.change}</li>
                    <li>change_percent: {item.change_percent}</li>
                    <li>dividend: {item.dividend}</li>
                    <li>exchange: {item.exchange}</li>
                    <li>last_trade_time: {item.last_trade_time}</li>
                    <li>price: {item.price}</li>
                    <li>ticker: {item.ticker}</li>
                    <li>yield: {item.yield}</li>
                </ul>;
            });
            setData(res)
            console.log(quotes);
        });
    }, [])
    return (
        <div className={style.finance_position} data-testid="finance-1">
            {data}
        </div>
    )
}

export default FinanceComponent