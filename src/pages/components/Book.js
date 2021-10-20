import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {checkPrice, createDescMarkup,checkCategories,checkLanguage,checkAuthors,checkPublishedDate,checkPublisher} from './BookInfoCheck';
import {PrintContext} from '../../Context/PrintContext';
import {EbookContext} from '../../Context/EbookContext';


const Book = (props) => {
    const [ebook,setEbook] = useContext(EbookContext);
    const [print,setPrint] = useContext(PrintContext);

    let book = props.book;

    const addNavbar= ()=>{
        let form = document.querySelector('form');
        let logo = document.querySelector('.logo')
        form.classList.remove('display');
        logo.classList.remove('center');
        setPrint('all');
        setEbook('full');
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>
                            <div className='title'>
                                <Link to='/Home' onClick={addNavbar}>
                                    <ArrowBackIcon />
                                </Link>
                                <h3>{book.volumeInfo.title}</h3>
                            </div>   
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan='2'>
                            <div className='image'>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt='Copertina'></img>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>Author/s</th>
                        <td>{checkAuthors(book.volumeInfo.authors)}</td>
                    </tr>
                    <tr>
                        <th>Prezzo</th>
                        <td>{checkPrice(book.saleInfo)}</td>
                    </tr>
                    <tr>
                        <th>Data Pubblicazione</th>
                        <td>{checkPublishedDate(book.volumeInfo.publishedDate)}</td>
                    </tr>    
                    <tr>
                        <th>Lingua</th>
                        <td>{checkLanguage(book.volumeInfo.language)}</td>
                    </tr>    
                    <tr>
                        <th>Categorie</th>
                        <td>{checkCategories(book.volumeInfo.categories)}</td>
                    </tr>
                    <tr>
                        <th>Casa Editrice</th>
                        <td>{checkPublisher(book.volumeInfo.publisher)}</td>
                    </tr>
                    <tr>
                        <th>Descrizione</th>
                        <td>{createDescMarkup(book.volumeInfo.description)}</td>
                    </tr> 
                </tbody>       
            </table>
                
                    
            
        </>    
    )
}

export default Book;