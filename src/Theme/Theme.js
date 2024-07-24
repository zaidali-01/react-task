import React, {useState, createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';

const userContext=createContext();

let a="black",b="white";

function Theme()
{
    const [mode, setmode]=useState(true);
    const [flag, setflag]=useState(false);
    
const Change=()=>
{
    if(mode)
    {
        a="gray";
        b="pink";
    }
    else
    {
        a="black";
        b="white";
    }
    console.log(mode);
    setmode(!mode);
}

    return (
        <userContext.Provider value={{Change}}>
           {flag ? <Component2 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", border:"3px solid #303030", backgroundColor:`${a}`, color:`${b}`}}>
            <h1 style={{textAlign:"center" }}>Component1</h1>
            <button onClick={()=>Change()} style={{marginLeft:"2px"}}>Switch Mode</button>
            <button onClick={()=>setflag(!flag)} style={{marginLeft:"2px"}}>Next</button>
            </div>}
        </userContext.Provider>
    );
}


function Component2()
{
    const [x,setx]=useState(false);
    const [y,sety]=useState(false);
    return (
        <>
        {y ? <Theme /> : <>
        {x ? <Component3 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", border:"3px solid #303030", backgroundColor:`${a}`, color:`${b}`}}>
            <h1 style={{textAlign:"center" }}>Component2</h1>
            <button onClick={()=>sety(!y)} style={{marginLeft:"2px"}}>Previous</button>
            <button onClick={()=>setx(!x)} style={{marginLeft:"2px"}}>Next</button>
        </div> }
        </>
        }
        </>
    );
}

function Component3()
{
    const [z,setz]=useState(false);
    const {Change}=useContext(userContext);
    return (
        <>
        {z ? <Component2 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", border:"3px solid #303030", backgroundColor:`${a}`, color:`${b}`}}>
            <h1 style={{textAlign:"center" }}>Component3</h1>
            <button onClick={()=>setz(!z)} style={{marginLeft:"2px"}}>Previous</button>
            <button onClick={()=>Change()} >Switch Mode</button>
        </div>}
        </>
    );
}

export default Theme