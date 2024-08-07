import { useNavigate } from "react-router-dom";


function Home()
{
    const navigate=useNavigate();
    return (
        <>
        <button onClick={()=>navigate("/register")}>register</button>
        <button onClick={()=>navigate("/login")}>login</button>
        <button onClick={()=>navigate("/users")}>users</button>
        </>
    );
}

export default Home;