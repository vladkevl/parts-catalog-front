import React, {useState} from "react";
import Parts from "../components/Parts";
import Filter from "../components/Filter";

const Main = () => {
    const [filter, setFilter] = useState({
        status: {_eq: 'published'},
    });

    return (
        <>
            <Filter filter={filter} setFilter={setFilter}/>
            <Parts filter={filter}/>
        </>
    )
}

export default Main;
