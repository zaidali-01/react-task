import React, {useState, createContext, useContext} from 'react';

const userContext=createContext();

let a="#032908",b="#1c7c27";

function Theme()
{
    const [mode, setmode]=useState(true);
    const [flag, setflag]=useState(false);
    
const Change=()=>
{
    if(mode)
    {
        a="#1c7c27";
        b="#032908";
    }
    else
    {
        a="#032908";
        b="#1c7c27";
    }
    setmode(!mode);
}

    return (
        <userContext.Provider value={{Change}}>
            <style>{'body { background-color: #3eaa3b; }'}</style>
           {flag ? <Component2 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", backgroundColor:`${a}`, color:"#0b4612"}}>
            <h1 style={{textAlign:"center" }}>Component1</h1>
            <button onClick={()=>Change()} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Switch Mode</button>
            <button onClick={()=>setflag(!flag)} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Next</button>
            </div>}
        </userContext.Provider>
    );
}

function Component2()
{
    const [x,setx]=useState(false);
    const [y,sety]=useState(false);
    return (
        <div>
            
        {y ? <Theme /> : <>
        {x ? <Component3 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", backgroundColor:`${a}`, color:"#0b4612"}}>
            <h1 style={{textAlign:"center" }}>Component2</h1>
            <button onClick={()=>sety(!y)} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Previous</button>
            <button onClick={()=>setx(!x)} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Next</button>
        </div> }
        </>
        }
        </div>
    );
}

function Component3()
{
    const [z,setz]=useState(false);
    const {Change}=useContext(userContext);
    return (
        <>
        {z ? <Component2 /> : <div style={{width:"99%", height:"480px", padding:"5px", textAlign:"center", borderRadius:"8px", backgroundColor:`${a}`, color:"#0b4612"}}>
            <h1 style={{textAlign:"center" }}>Component3</h1>
            <button onClick={()=>setz(!z)} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Previous</button>
            <button onClick={()=>Change()} style={{marginLeft:"2px", backgroundColor:`${b}`, padding:"5px", border:"0px solid green", borderRadius:"5px"}}>Switch Mode</button>
        </div>}
        </>
    );
}

export default Theme