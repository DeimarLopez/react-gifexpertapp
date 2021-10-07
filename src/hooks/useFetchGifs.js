import { useState, useEffect } from "react";
import { getGfs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data:[],
        loadig: true
    });

        
    useEffect(()=>{
        getGfs(category)
        .then(imgs=>{
            setstate({
                data: imgs,
                loadig: false
            })
        });
    },[category]) 


    return state;
}
