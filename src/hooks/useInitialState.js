import {useEffect,useState} from 'react';

const useInitialState = (search) => {
    const [state,setState] = useState([]);

    useEffect(() => {
        try{
            fetch(`https://api.rawg.io/api/games?key=e8715360d08f430abab063d824de93db&page=1&page_size=10&search=${search}`)
            .then(response => response.json())
            .then(data => setState(data))
        }catch(error){
            throw new Error(error);
        }
    },[])

    return state;
}


export {useInitialState};