import React,{useContext} from 'react';
import Card from './Card';
import {DataContext} from '../../Context/DataContext'
import Error from '../Error'
const BookList = () => {

    const [data,setData] = useContext(DataContext);
    

    return(
        <>
        {data === undefined ? <Error></Error> : data.map((book =>
            <Card key={book.id} id={book.id} title={book.volumeInfo.title} img={book.volumeInfo.imageLinks.thumbnail} author={book.volumeInfo.authors}/>
        ))} 
        </>
    )
}



export default BookList;