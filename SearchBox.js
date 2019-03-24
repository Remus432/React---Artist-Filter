import React from "react";


const SearchBox = ({getInput}) => {
    return (
        <div className="SearchBox">
            <h1>React Search!</h1>
            <p>Here is a list of Reggae artists rendered from a JSON object</p>
            <div className="form">
                <h3>Search</h3>
                <input onChange={getInput} type="text" placeholder="Search the list with React"/>
            </div>
        </div>
    )
}


export default SearchBox;