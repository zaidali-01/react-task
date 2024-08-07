import { useEffect, useState } from "react";
import { useAddUsersMutation } from "./Datafetch.js";
import { useNavigate } from "react-router-dom";

function Register()
{
    const [createUser,{isLoading, isSuccess}] = useAddUsersMutation();
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpass]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{isSuccess && navigate(-1)},[isSuccess]);
    if(isLoading)
        return <p>loading...</p>

    const register = async (user)=>
        {
            try{
                await createUser(user);
                alert("user created!");
            }
            catch(error){
                alert("error");
            }
        }

    return (
        <>
        <h1>Register</h1>
            <form>
                <label>Name:
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                </label><br></br>
                <label>Email:
                    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
                </label><br></br>
                <label>Password:
                    <input type="text" value={password} onChange={(e)=>setpass(e.target.value)} />
                </label><br></br>
                <button onClick={()=>register({name,email,password})}  style={{padding:"calc(0.15rem + 0.15vw)", border:"1px solid #000000", borderRadius:"5px"}}>Add User</button>
            </form>
        </>
    );
}

export default Register;