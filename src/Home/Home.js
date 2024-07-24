import React from 'react';

function Home()
{

    return (
        <>
        <h1 style={{textAlign:"center", fontSize:"50px", marginTop:"4%", color:"#167913"}}>Welcome to Home Page</h1>
        <ul style={{fontSize:"35px", marginLeft:"5%" }}>
            The different tabs in the home page shows the following functionalities in React:
            <li style={{fontSize:"25px", marginTop:"2%", marginLeft:"3%"}}>Customized product cards</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>A list of tasks with their status</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>An autoplayed gallery</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>A login validation</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>A theme changer</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>A dynamic user list search</li>
            <li style={{fontSize:"25px", marginLeft:"3%"}}>A real time stock ticker</li>
        </ul>
        </>
    );
}

export default Home;