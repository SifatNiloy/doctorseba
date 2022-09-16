import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Doctors from './Pages/Home/Doctors/Doctors';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Products from './Pages/Home/Products/Products';
import FAQ from './Pages/Home/FAQ/FAQ';
import { useEffect, useState } from 'react';





function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div >
      <Header></Header><br /><br />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetail services={services}></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/doctors' element={
          <RequireAuth>
            <Doctors></Doctors>
          </RequireAuth>
        }></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/faq' element={<FAQ></FAQ>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;