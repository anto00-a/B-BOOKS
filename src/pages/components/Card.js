import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Link from 'react-router-dom/Link';
import {checkAuthors} from './BookInfoCheck'


const Card = (props) => {
    

    const removeNavbar= ()=>{
        let form = document.querySelector('form');
        let logo = document.querySelector('.logo')
        form.classList.add('display');
        logo.classList.add('center');
    }
    
    return(
        <div className='card-size'>
            <div className='card'>
                <img src={props.img} alt='Copertina'></img>
                <h2>{props.title}</h2>
                <p>{checkAuthors(props.author)}</p>
                <Link to={`/BookInfo/${props.id}`} onClick={removeNavbar}> 
                    <button className='more'>
                        <p>More</p>
                        <AddIcon/>
                    </button>    
                </Link>
            </div>
            
        </div>
    )
}


export default Card;