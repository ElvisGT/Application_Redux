import {useEffect,useState} from 'react';

const useScroll = () => {
    const [scroll,setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",function() {
            const headerScroll = document.getElementById("header");

            if(this.document.scrollTop > 1){
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        });
    },[]);

    console.log(scroll)
   
    return scroll;
}


export {useScroll};