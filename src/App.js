import React from 'react';
import './App.css';
import {List}from './Components/compo.js';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App() {
  const items1 =[
    {id:1, title:'리바운드'},
    {id:2, title:'스즈메의 문단속'},
    {id:3, title:'드림'}];

  const items2 =[
    {id:1, title:'I AM - 아이브'},
    {id:2, title:'Grabby Girl - 류수정'},
    {id:3, title:'마치 - 미노이'}];

  const items3 =[
    {id:1, title:'지구 끝의 온실 - 김초엽'},
    {id:2, title:'천 개의 파랑 - 천선란'},
    {id:3, title:'므레모사 - 김초엽'}];

    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <p><Link to='/'>4주차 리액트 실습</Link></p>
          </header>
          <div className='Home-btn'>
              <button><Link to='/Movie'>Movie</Link></button>
              <button><Link to='/Music'>Music</Link></button>
              <button><Link to='/Book'>Book</Link></button>
          </div>

          <Routes>
            <Route path='/'/>
            <Route path='/Movie' element={<List items={items1} />}/>
            <Route path='/Music' element={<List items={items2} />}/>
            <Route path='/Book' element={<List items={items3} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;


