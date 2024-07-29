import React, {useState, useEffect} from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

function Display(props)
{
    return(
        <>
        <img src={props.data.get(props.val%4+1)} alt="image" style={{marginTop:"3%",marginBottom:"2%", marginLeft:"calc(1.2rem + 1.2vw)", height:"160px", width:"42%"}} ></img>
        <img src={props.data.get((props.val+1)%4+1)} alt="image" style={{marginTop:"3%", marginBottom:"2%", marginLeft:"4%", height:"160px", width:"42%"}} ></img>
        </>
    );
}

function Pictures()
{
    const [X,setX]=useState(0);
    const [Z,setZ]=useState(false);
    let a="<",b=">";
    
    useEffect(() => {
        if(Z==false)
        {
        const interval = setInterval(() => {
            setX((X) => (X + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
        }
    },[Z]);

    let arr= new Map([
        [1,img1],
        [2,img2],
        [3,img3],
        [4,img4]
    ]);
    
    return(
        <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27", borderRadius:"5px", alignItems:"center"}}>
        <style>{'body { background-color: #3eaa3b; }'}</style>
        <h1 style={{textAlign:"center", color:"#0b4612", marginTop:"4%"}}>Picture Gallery</h1>
        <div onMouseOver={()=>{setZ((Z)=>true)}} onMouseLeave={()=>{setZ((Z)=>false)}} style={{backgroundColor:"#0b4612", width:"calc(20rem + 20vw)", marginTop:"3%",padding:"2%",borderRadius:"8px",boxShadow:"0 0 10px #0b4612", marginBottom:"7%", border:"1px solid #13571b"}} >
            <button onClick={()=>{setX((X)=>(X+4-1)%4)}} style={{position:"absolute", backgroundColor:"#13571b", border:"1px solid #35ad43", borderRadius:"5px", marginTop:"calc(3rem + 3vw)"}}>{a}</button>
            <Display data={arr} val={X} />
            <button onClick={()=>{setX((X)=>X+1)}} style={{marginLeft:"1%", position:"absolute", backgroundColor:"#13571b", border:"1px solid #35ad43", borderRadius:"5px", marginTop:"calc(3rem + 3vw)"}}>{b}</button>
        </div>
        </div>
    );
}

export default Pictures 