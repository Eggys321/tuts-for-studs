import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import AllUsers from './pages/AllUsers';
import Navbar from './layouts/Navbar'
import SingleUser from './pages/SingleUser';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/AllUsers' element={<AllUsers/>}/>
      <Route path='/SingleUser/:userId' element={<SingleUser/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App