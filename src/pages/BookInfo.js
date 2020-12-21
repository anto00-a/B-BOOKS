import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Book from './components/Book';
import Loading from "./Loading";

const BookInfo = ({match}) => { 
    
    const id=match.params.id;
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        let URL = ("https://www.googleapis.com/books/v1/volumes");
        const fetchBook = async () => {
            setLoading(true);
            setError(false);
            try {
                //The link is with a unique id of the book
                const result = await axios.get(URL + "/" + id);
                setBook(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        // Call the API
        setTimeout(fetchBook(),1000);
    }, [id]);
        
    
    return (
        <div className='container_info'>
            {
                !book ? <Loading loading={loading}/> : <Book book={book}></Book>
            }
            
        </div> 
    )
}   
    



export default BookInfo;