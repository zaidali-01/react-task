import React from 'react';
import shoe from './shoe.jpg';
import shirt from './shirt.jpg'
import watches from './watches.jpg'

   
    function Cards()
    {
        return (
            <div>
                 <style>{'body { background-color: #3eaa3b; }'}</style>
            <div style={{display:"flex", width:"47%",heigth:"170px",backgroundColor:"#186b22", padding:"3%",marginTop:"5%", marginBottom:"5%", marginLeft:"22%", borderRadius:"50px", border:"15px solid #13531a"}}>
            <div style={{backgroundColor:"rgb(206, 104, 104)", height:"60%", width:"30%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={shoe} alt={"shoe"}  width="100%"></img>
            <h1 style={{ fontSize:"calc(1.2rem + 1.2vw)", color:"red", textAlign:"center" }} >Shoe</h1>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"red" }}>Price: 1000pkr</p>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"red" }}>Rating: 7.5</p>
            </div>
            <div style={{backgroundColor:"rgb(203, 216, 79)", height:"60%", width:"30%", marginLeft:"5%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={shirt} alt={"shirt"}  width="100%"></img>
            <h1 style={{ fontSize:"calc(1.2rem + 1.2vw)", color:"green", textAlign:"center" }} >Shirt</h1>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"green" }}>Price: 1500pkr</p>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"green" }}>Rating: 8.3</p>
            </div>
            <div style={{backgroundColor:"lightblue", height:"60%", width:"30%", marginLeft:"5%", marginTop:"1%",padding:"3.3%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}}  >           
            <img src={watches} alt={"watch"}  width="100%"></img>
            <h1 style={{ fontSize:"calc(1.2rem + 1.2vw)", color:"#9050ff", textAlign:"center" }} >Shirt</h1>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"#9050ff" }}>Price: 1500pkr</p>
            <p style={{ fontSize:"calc(0.8rem + 0.8vw)", color:"#9050ff" }}>Rating: 8.3</p>
            </div>
            </div>
            </div>
        );
    }

export default Cards;