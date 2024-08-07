import { useState, useEffect } from "react";
import { useLoginUserMutation } from "./Datafetch.js";
import { useNavigate } from "react-router-dom";


function Login()
{
    const [loginUser,{data,isLoading,isSuccess}]=useLoginUserMutation();
    const [email,setemail]=useState("");
    const [password,setpass]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{localStorage.setItem("data",JSON.stringify(data || {}))},[data]);
    useEffect(()=>{isSuccess && navigate(-1)},[isSuccess]);

    if(isLoading)
        return <p>loading...</p>
    
    const login = async (user)=>
        {
            try{
                await loginUser(user);
                alert("user loginned");
            }
            catch(error){
                alert("error");
            }
        }

    return (
    <>
    <h1>Login</h1>
    <form>
    <label>Email:
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
    </label><br></br>
        <label>Password:
        <input type="text" value={password} onChange={(e)=>setpass(e.target.value)} />
    </label><br></br>
    <button onClick={()=>login({email,password})}>Login</button>
    </form>
    </>
    );
}

export default Login