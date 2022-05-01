import React,{useState} from 'react';
import { connect } from 'react-redux';
import {SearchInput} from '../actions/actions';
import {useInitialState} from '../hooks/useInitialState';




const Search = (props) => {
    const {game} = props;
    const [form,setForm] = useState({
        gameName:'',
    });
    
    
    const date = useInitialState(game);
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        SearchInput(form.gameName)
        
    }
    
    const handleSearch = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
        
    }
    


    return(
        <div className="Search"> 
            <h1>Buscador</h1>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Teclee el juego a buscar" name="game" onChange={handleSearch}/>
                <input type="submit" />
               
               {date.length > 0 &&
                    console.log(date.name)

               }
            </form>
        </div>
    )


}

const mapDispatchToProps = {
    SearchInput,
    
}

const mapStateToProps = (state) => {
    return {
        game:state.game,
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Search);