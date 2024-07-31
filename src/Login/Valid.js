import React, { useState } from 'react';

function Valid()
{
    const [x,setx]=useState(1);
    const [user,setuser]=useState("");
    const [pass,setpass]=useState("");
    const [exp,setexp]=useState(true);
    const [arr,setarr]=useState([]);
    
function validate()
{
    let z=0;
    setarr([]);
    if(!user.includes("@"))
    {
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'username is not an email'}]);
    }
    if(pass.length<8)
    {
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'password is less than 8 characters'}]);
    }
    if(pass===pass.toLowerCase())
    {
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'password doesn\'t contain uppercase'}]);
    }
    if(pass===pass.toUpperCase())
    {
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'password doesn\'t contain lowercase'}]);
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
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'password doesn\'t contain number'}]);
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
        z++;
        setarr((prev)=>[...prev,{id:z,msg:'password doesn\'t contain symbol'}]);
    }
    if(z!=0)
    setexp(false);
    else
    setexp(true);
    return z;
}

    return (
        <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27", borderRadius:"5px", alignItems:"center"}}>
        <style>{'body { background-color: #3eaa3b; }'}</style>
        {x!=0 ?
        <div style={{width:"calc(10rem + 10vw)", padding:"5px", marginTop:"5%", marginBottom:"5%", borderRadius:"8px", border:"3px solid #35ad43", backgroundColor:"#0b4612"}}>
            <h1 style={{textAlign:"center", marginTop:"10%", color:"#0b4612"}}>Login</h1>
            <form style={{marginTop:"10%"}}>
                <label style={{marginLeft:"9%"}}>Enter Username:<br></br>
                    <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} placeholder="username" style={{marginTop:"5px",marginLeft:"9%", padding:"5px", width:"77%", border:"2px solid #35ad43", backgroundColor:"#13571b"}}></input>
                </label ><br></br><br></br>
                <label style={{marginTop:"10px", marginLeft:"9%"}}>Enter Password:<br></br>
                    <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="password" style={{marginTop:"5px",marginLeft:"9%", padding:"5px", width:"77%", border:"2px solid #35ad43", backgroundColor:"#13571b"}}></input>
                </label><br></br><br></br>
                    {exp ? 
                <ul style={{alignItems:"center"}}>
                    <li>username must be an email id</li>
                    <li>password atleast contains 8 characters</li>
                    <li>password contains atleast 1 uppercase, 1 lowercase, 1 number and 1 symbol</li>
                    </ul> : <ul style={{alignItems:"center"}}>
                        {arr.map((m)=><li key={m.id} style={{color:"red"}}>{m.msg}</li>)}
                        </ul>}
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    setx(validate)}} style={{display:"block", marginLeft:"32%", marginTop:"5%", marginBottom:"6%", fontSize:"100%", padding:"3% 10%", border:"2px solid #35ad43", borderRadius:"8px", backgroundColor:"#13571b" }}>Login</button>
            </form>
        </div> : <div>
                 <h1 style={{color:"#0b4612", marginTop:"40%", marginBottom:"20%"}}>Welcome!</h1>
                 <button onClick={()=>setx(1)} style={{border:"2px solid #35ad43", borderRadius:"8px", backgroundColor:"#0b4612", marginBottom:"230%", marginLeft:"35%"}}>OK</button>
                 </div>}
        </div>
    );
}

export default Valid;