import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`Searching for "${keyword}" definition`);
    }    

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <p>
                Hello from dictionary
            </p>
            <form onSubmit={search} className="d-flex justify-content-evenly">
                <input type="search" onChange={handleKeywordChange}/>
                <button className="btn btn-secondary">
                Search
                </button>
            </form>
        </div>
    )

}