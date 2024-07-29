import React from 'react';

function Home()
{
    return (
        <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27", borderRadius:"5px"}}>
        <style>{'body { background-color: #3eaa3b; }'}</style>
        <h1 style={{textAlign:"center", fontSize:"calc(1.6rem + 1.6vw)", marginTop:"4%", color:"#0b4612"}}>Welcome to Home Page</h1>
        <ul style={{fontSize:"calc(1.1rem + 1.1vw)", marginLeft:"5%", marginBottom:"5%" }}>
            The different tabs in the home page shows the following functionalities in React:
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginTop:"2%", marginLeft:"3%"}}>Customized product cards</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>A list of tasks with their status</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>An autoplayed gallery</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>A login validation</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>A theme changer</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>A dynamic user list search</li>
            <li style={{fontSize:"calc(0.8rem + 0.8vw)", marginLeft:"3%"}}>A real time stock ticker</li>
        </ul>
        </div>
    );
}

export default Home;