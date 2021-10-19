import React,{useState,useContext} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {DataContext} from '../../Context/DataContext'
import {ResultsContext} from '../../Context/ResultsContext';
import axios from 'axios';
import {MaxResultContext} from '../../Context/MaxResultContext';
import {PrintContext} from '../../Context/PrintContext';
import {EbookContext} from '../../Context/EbookContext';
import Error from '../Error';




const Form = () => {
    const [search,setSearch] = useState('');
    const [data,setData] = useContext(DataContext);
    const [result,setResult] = useContext(ResultsContext);
    const [ebook,setEbook] = useContext(EbookContext);
    const [print,setPrint] = useContext(PrintContext)
    const [maxResult,setMaxResult] = useContext(MaxResultContext); 
    let API_KEY=process.env.REACT_APP_API_KEY
    


    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const getData =(e)=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=AIzaSyCpMNo1aQJf1otwqgEIK-21JRv6fEd9H9M&maxResults=${maxResult}&printType=${print}&filter=${ebook}`)
        .then(function (response) {
        setData(response.data.items)
        })
        .catch(function (error) {
        return <Error></Error>
        });
        setSearch('')
        setResult(true);
        e.preventDefault()
    } 
    

    return(
        
        <form className='form' onSubmit={getData}>
            <input type='text' placeholder='Cerca il titolo di un libro' value={search} onChange={updateSearch}></input>                          
            <div className='button-div'>
                <button type='submit' onClick={getData}><SearchIcon size='50px'/></button>
            </div> 
        </form>
    )
}



export default Form;