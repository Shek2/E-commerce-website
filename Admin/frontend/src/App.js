import React from 'react';
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AddShirt from './components/AddShirt';
import About from './components/About';
import Shirts from './components/Shirt/Shirts';
import ShirtDetail from './components/Shirt/ShirtDetail';

function App() {
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/add' element={<AddShirt />} exact />
        <Route path='/shirts' element={<Shirts />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/books/:id' element={<ShirtDetail />} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
