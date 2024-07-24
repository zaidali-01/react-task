import React from 'react';
import ReactDOM from 'react-dom/client';
import shoe from './shoe.jpg';
import shirt from './shirt.jpg'
import watches from './watches.jpg'

   
    function Cards()
    {
        return (
            <div>
                 <style>{'body { background-color: #3eaa3b; }'}</style>
            <div style={{display:"flex", width:"47%",heigth:"170px",backgroundColor:"gray", padding:"3%",marginTop:"5%", marginBottom:"5%", marginLeft:"22%", borderRadius:"50px", border:"15px solid rgb(66, 60, 121)"}}>
            <div style={{backgroundColor:"rgb(206, 104, 104)", height:"60%", width:"30%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={shoe} alt={"shoe"}  width="100%"></img>
            <h1 style={{ fontSize:"200%", color:"red", textAlign:"center" }} >Shoe</h1>
            <p style={{ fontSize:"125%", color:"red" }}>Price: 1000pkr</p>
            <p style={{ fontSize:"125%", color:"red" }}>Rating: 7.5</p>
            </div>
            <div style={{backgroundColor:"rgb(203, 216, 79)", height:"60%", width:"30%", marginLeft:"5%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={shirt} alt={"shirt"}  width="100%"></img>
            <h1 style={{ fontSize:"200%", color:"green", textAlign:"center" }} >Shirt</h1>
            <p style={{ fontSize:"125%", color:"green" }}>Price: 1500pkr</p>
            <p style={{ fontSize:"125%", color:"green" }}>Rating: 8.3</p>
            </div>
            <div style={{backgroundColor:"lightblue", height:"60%", width:"30%", marginLeft:"5%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={watches} alt={"watch"}  width="100%"></img>
            <h1 style={{ fontSize:"200%", color:"#9050ff", textAlign:"center" }} >Shirt</h1>
            <p style={{ fontSize:"125%", color:"#9050ff" }}>Price: 1500pkr</p>
            <p style={{ fontSize:"125%", color:"#9050ff" }}>Rating: 8.3</p>
            </div>
            </div>
            </div>
        );
    }

export default Cards;