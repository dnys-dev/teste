
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';



export const Router = () => {
    return (
        <BrowserRouter> 
        <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
        </Routes>
         
        </BrowserRouter>
        
    );
}