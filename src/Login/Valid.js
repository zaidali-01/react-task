import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Valid()
{
    const [x,setx]=useState(1);
    const [user,setuser]=useState("");
    const [pass,setpass]=useState("");
    
    
function validate()
{
    let z=0;
    if(!user.includes("@"))
    {
        alert('username is not an email');
        z++;
    }
    if(pass.length<8)
    {
        alert('password is less than 8 characters');
        z++;
    }
    if(pass===pass.toLowerCase())
    {
        alert('password doesn\'t contain uppercase');
        z++;
    }
    if(pass===pass.toUpperCase())
    {
        alert('password doesn\'t contain lowercase');
        z++;
    }
    let d=false;
    for(let i=0;i<pass.length && d==false;i++)
    {
        if(Number.isInteger(Number.parseInt(pass[i])))
        {
            d=true;
        }
    }
    if(d==false)
    {
        alert('password doesn\'t contain number');
        z++;
    }
    d=false;
    for(let i=0;i<pass.length && d==false;i++)
    {
        let ch = pass.charCodeAt(i);
    if (
        !(ch >= 65 && ch <= 90) && 
        !(ch >= 97 && ch <= 122) && 
        !(ch >= 48 && ch <= 57) 
    )
    {
        d=true;
    }
    }
    if(d==false)
    {
        alert('password doesn\'t contain symbol');
        z++;
    }
    return z;
}

    return (
        <>{x!=0 ?
        <div style={{width:"23%", padding:"5px", marginLeft:"35%", marginTop:"7%", marginBottom:"10%", borderRadius:"8px", border:"3px solid #303030", backgroundColor:"#e3e3e3", color:"#303030"}}>
            <h1 style={{textAlign:"center", marginTop:"10%"}}>Login</h1>
            <form style={{marginTop:"10%"}}>
                <label style={{marginLeft:"9%"}}>Enter Username:<br></br>
                    <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} placeholder="username" style={{marginTop:"5px",marginLeft:"9%", padding:"5px", width:"77%"}}></input>
                </label ><br></br><br></br>
                <label style={{marginTop:"10px", marginLeft:"9%"}}>Enter Password:<br></br>
                    <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="password" style={{marginTop:"5px",marginLeft:"9%", padding:"5px", width:"77%"}}></input>
                </label><br></br><br></br>
                <ul style={{alignItems:"center"}}>
                    <li>username must be an email id</li>
                    <li>password atleast contains 8 characters</li>
                    <li>password contains atleast 1 uppercase, 1 lowercase, 1 number and 1 symbol</li>
                </ul>
                <button type="submit" onClick={()=>setx(validate)} style={{display:"block", marginLeft:"32%", marginTop:"5%", marginBottom:"6%", fontSize:"100%", padding:"3% 10%", border:"0.2% solid black", borderRadius:"8px", backgroundColor:"#626262" }}>Login</button>
            </form>
        </div> : <>
                 <h1>Welcome!</h1>
                 <button onClick={()=>setx(1)}>OK</button>
                 </>}
        </>
    );
}

export default Valid;