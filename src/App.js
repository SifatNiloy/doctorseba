
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

import Footer from './Pages/Shared/Footer/Footer';

import NotFound from './Pages/Shared/NotFound/NotFound';
import Doctors from './Pages/Home/Doctors/Doctors';

import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
