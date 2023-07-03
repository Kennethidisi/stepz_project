import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import FAQ from './components/faq';
import Contact from './components/contact';
import Cart from './components/cart';
import Details from './components/details';


export default function App(){
return(
  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<Details/>}/>

      </Routes>
  </BrowserRouter>
)
}