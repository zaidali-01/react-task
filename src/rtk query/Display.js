import React from "react";
import { useFetchUsersQuery} from "./Datafetch.js";

function Display()
{
    const {data, error, isLoading} = useFetchUsersQuery();

    if(isLoading)
        return <p>loading...</p>;
    if(error)
        return <p>Error: {error.error}</p>

    return (
        <div>
            {data.results.map((a)=><h3>{a.name}</h3>)}
        </div>
    );
}

export default Display;