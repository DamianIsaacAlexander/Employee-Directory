import React, {useRef} from "react";
import MagnifyingIcon from "../Icons/Icons"
import "./style.css";

function Search({setSearchVal, searchVal}) {

    const inputEl = useRef(null)
    
    function handleSubmit(e){
        e.preventDefault();
        if(inputEl.current.value){
            setSearchVal(inputEl.current.value);
        }
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input 
                ref={inputEl}
                type="text" 
                className="search__input" 
                placeholder="Search Employee" 
                onChange={(e) => {setSearchVal(e.target.value);}}
                value={searchVal}
            />
            <button className="search__btn">
               <MagnifyingIcon/>
            </button>
        </form>
    );
}

export default Search;