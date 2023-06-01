import React, { useState } from 'react';
import './App.css';
import Shop from './Shop';
import Add from './Add';
import { createContext } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom'
import Footer from './Footer';

export const Context = createContext();////creating the context



function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);///// to track the price items on the add component


  const handleClick = (item) => {
    const newItem = {
      id: item.id,
      cake: item.cake,
      price: item.price,
      productImage: item.productImage,
    };
    setProducts((prevproducts) => [...prevproducts, newItem]);
    setTotalPrice((prevtotalPrice) => prevtotalPrice + item.price);
  };

  const handleRemove = (item) => {
    setProducts((prevproducts) => prevproducts.filter((product) => product.id !== item.id));
  };


  return (
    <div className="App">
      <AppRouter>
        <Navbar />
        <Context.Provider value={{ products, handleClick, handleRemove, totalPrice }}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Context.Provider>
        <hr></hr>
        <Footer />
        <hr></hr>
      </AppRouter>
    </div>
  );
  
}

export default App;











































// import { createContext } from 'react';

// export const Context = createContext();/// creating the context


//       {/* <Shop cake={cake} /> */}
//       {/* <Add cake={cake} /> */}
//       {/* <Context.Provider value={'daniel'}>

// </Context.Provider> */}