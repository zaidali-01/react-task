import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios';

const baseURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=8D3BDFIOLYVXNDBS";

function Stock()
{
    const [price,setprice]=useState([]);
    const prevprice=useRef(0);

    useEffect(()=>{ prevprice.current=price['5. Exchange Rate']; axios.get(baseURL).then((response)=>{setprice(response.data["Realtime Currency Exchange Rate"])})},[price['5. Exchange Rate']]);

    return (
        <div>
            <h1 style={{textAlign:"center"}}>{price['1. From_Currency Code']}/{price['3. To_Currency Code']}</h1>
            <p style={{textAlign:"center"}}>Current Price: {price['5. Exchange Rate']}</p>
            <p style={{textAlign:"center"}}>Change in Price: {prevprice.current==0 ? prevprice.current : price['5. Exchange Rate']-prevprice.current}</p>
            <p style={{textAlign:"center"}}>Percentage Change: {prevprice.current==0 ? (prevprice.current * 100)/prevprice.current : (price['5. Exchange Rate']-prevprice.current * 100)/prevprice.current}%</p>
            {console.log(price)}
        </div>
    );
}

/*function Stock()
{
    const [price,setprice]=useState([]);

    useEffect(()=>{axios.get(baseURL).then((response)=>{setprice(response.data)})},[]);
    return (
        <>
        {console.log(price)}
        </>
    );
}*/

export default Stock
