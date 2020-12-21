import React,{useContext} from 'react';
import Link from 'react-router-dom/Link';
import Form from './Form';
import {PrintContext} from '../../Context/PrintContext';
import {EbookContext} from '../../Context/EbookContext';


const Navbar = () => {

    const [ebook,setEbook] = useContext(EbookContext);
    const [print,setPrint] = useContext(PrintContext)

    const addNavbar= ()=>{
        let form = document.querySelector('form');
        let logo = document.querySelector('.logo')
        form.classList.remove('display');
        logo.classList.remove('center');
        setPrint('all');
        setEbook('full');
    }
    return( 
        <div className='navbar' id='navbar'>
            <div className='filter' id='filter'></div>
            <Link to='/Home' onClick={addNavbar}>
                <h1 className='logo'>B&BOOKS</h1>
            </Link>
            <Form/>
            
        </div>
        
        
        
    )
}


export default Navbar;