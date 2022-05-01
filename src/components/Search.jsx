import React,{useRef} from 'react';
import { connect } from 'react-redux';
import {SearchInput} from '../actions/actions';




const Search = (props) => {
    const inputRef = useRef();
    
    const FetchData = async () => {
        await fetch(`https://api.rawg.io/api/games?key=e8715360d08f430abab063d824de93db&page=1&page_size=20&search_precise=true&search=${inputRef.current.value}`)
        .then(response => response.json())
        .then(data => props.SearchInput(data.results))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        FetchData();

        
    }
    
    
    return(
        <div className="Search"> 
            <h1>Buscador</h1>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Teclee el juego a buscar" ref={inputRef}/>
                <input type="submit" />
               
            </form>
        </div>
    )


}

const mapDispatchToProps = {
    SearchInput,
    
}

export default connect(null,mapDispatchToProps)(Search);