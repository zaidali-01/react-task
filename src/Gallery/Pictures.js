import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

function Display(props)
{
    return(
        <>
        <img src={props.data.get(props.val%4+1)} alt="image" style={{marginTop:"3%",marginBottom:"2%", marginLeft:"5%", height:"160px", width:"42%"}} ></img>
        <img src={props.data.get((props.val+1)%4+1)} alt="image" style={{marginTop:"3%", marginBottom:"2%", marginLeft:"5%", height:"160px", width:"42%"}} ></img>
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
        <>
        <h1 style={{textAlign:"center", color:"green", marginTop:"5%"}}>Picture Gallery</h1>
        <div onMouseOver={()=>{setZ((Z)=>true)}} onMouseLeave={()=>{setZ((Z)=>false)}} style={{backgroundColor:"lightblue", width:"49%", marginLeft:"20%", marginTop:"5%",padding:"2%",borderRadius:"8px",boxShadow:"0 0 10px rgb(0, 0, 0)"}} >
            <button onClick={()=>{setX((X)=>(X+4-1)%4)}} style={{position:"absolute",marginTop:"7%"}}>{a}</button>
            <Display data={arr} val={X} />
            <button onClick={()=>{setX((X)=>X+1)}} style={{marginLeft:"1%", marginBottom:"40%", position:"absolute", marginTop:"7%"}}>{b}</button>
        </div>
        </>
    );
}

export default Pictures 