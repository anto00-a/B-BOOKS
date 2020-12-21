import React,{createContext, useState} from 'react';


export const EbookContext = createContext();


export const EbookProvider = props => {
    const [ebook,setEbook] = useState('full')
    
    

    
    return (
        <EbookContext.Provider value={[ebook,setEbook]}>
            {props.children}
        </EbookContext.Provider>
    )
}