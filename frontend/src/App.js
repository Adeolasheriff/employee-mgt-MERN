import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Create from './components/create';
import Update from './components/update';
import Detail from './components/detail';
import Image from './components/image';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/image' element={<Image/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
