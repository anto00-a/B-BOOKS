import React,{useContext} from 'react';
import Results from './components/Results';
import {MaxResultContext} from '../Context/MaxResultContext';
import {PrintContext} from '../Context/PrintContext';
import {EbookContext} from '../Context/EbookContext';


const Home = () => {
    const [ebook,setEbook] = useContext(EbookContext);
    const [print,setPrint] = useContext(PrintContext)
    const [maxResult,setMaxResult] = useContext(MaxResultContext)
    return(
        <div className='container'>
            <div className='filters'>
                <form>
                    <label htmlFor="filter">Ebook:</label>
                    <select name="Ebook" id="Ebook" onChange={e=>{setEbook(e.target.value)}}>
                        <option value='full'>No</option>
                        <option value="ebooks">Yes</option>
                    </select>
                    <label htmlFor='print'>Print type:</label>
                    <select name ='print' id='print' onChange={e=>{setPrint(e.target.value)}}>    
                        <option value="All">All</option>
                        <option value="Books">Books</option>
                        <option value="Magazines">Magazines</option>
                    </select>
                    <label htmlFor='maxResult'>Max Result:</label>
                    <input type='number' value={maxResult} onChange={e=>{setMaxResult(e.target.value)}}></input>
                </form>
            </div>
            <Results/>
        </div>
    )
}





export default Home;