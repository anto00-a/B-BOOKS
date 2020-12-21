import React,{createContext, useState} from 'react';


export const MaxResultContext = createContext();


export const MaxResultProvider = props => {
    const [maxResult,setMaxResult] = useState('12')
    
    

    
    return (
        <MaxResultContext.Provider value={[maxResult,setMaxResult]}>
            {props.children}
        </MaxResultContext.Provider>
    )
}