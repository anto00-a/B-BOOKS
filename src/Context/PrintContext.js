import React,{createContext, useState} from 'react';


export const PrintContext = createContext();


export const PrintProvider = props => {
    const [print,setPrint] = useState('all')
    
    

    
    return (
        <PrintContext.Provider value={[print,setPrint]}>
            {props.children}
        </PrintContext.Provider>
    )
}