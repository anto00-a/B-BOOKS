import React,{useContext} from 'react';
import BookList from './BookList';
import {ResultsContext} from '../../Context/ResultsContext'



const Results = () => {
    const [result,setResult] = useContext(ResultsContext)
    
    let list;
    
        switch (result) {
            case true:
                list = <BookList/>
                break;
            case false:
                list = <h1 className='nores'>NOTHING TO SHOW</h1>
                break;
            default:
                break;
        }
    
    return(              
        <div className='card-container'>
            <div className='crd-cnt'>
                {list}
            </div>
            
        </div>
    )
}





export default Results;