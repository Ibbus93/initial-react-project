import React from 'react';

import './App.css';
import Routes from "../routes";
import {BrowserRouter} from "react-router-dom";
import HeaderView from "../views/header";
import Footer from "../views/footer";

const App = () => (
    <BrowserRouter>
      <HeaderView/>
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <Routes/>
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
);


export default App;
