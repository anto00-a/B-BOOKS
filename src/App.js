import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './pages/components/Navbar';
import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import Error from './pages/Error';
import {ResultsProvider} from './Context/ResultsContext';
import {MaxResultProvider} from './Context/MaxResultContext';
import {PrintProvider} from './Context/PrintContext';
import {EbookProvider} from './Context/EbookContext';
import {DataProvider} from './Context/DataContext';
import Footer from './pages/components/Footer';



function App() {




  return (
    <MaxResultProvider>
    <EbookProvider>
    <PrintProvider>
    <ResultsProvider>
    <DataProvider>  
      <div className='App'>
        <NavBar/>
        
        <Switch>
          <Route exact path='/Home' component={Home}/>    
          <Route exact path='/BookInfo/:id' component={BookInfo}/>
          <Route  path='/'>
            <Redirect to='/Home'></Redirect>
          </Route>
          
        </Switch>
        <Footer/>
      </div>
    </DataProvider>
    </ResultsProvider>
    </PrintProvider>
    </EbookProvider>
    </MaxResultProvider>
  );
}

export default App;
