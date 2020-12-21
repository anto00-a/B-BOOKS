import React,{useState,createContext} from 'react';


export const ResultsContext = createContext();


export const ResultsProvider = props => {
    const [result,setResult] = useState(false)
    

    

    
    return (
        <ResultsContext.Provider value={[result,setResult]}>
            {props.children}
        </ResultsContext.Provider>
    )
}