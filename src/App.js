import React, { useState } from 'react';
import './App.css';

function List(props){
  const items = props.items;
  let [like, setLike] = useState(items.map(
    () => {return('0')}
  ));
  const listItems = items.map((i,index) => (
      <div className='list' key={i.id}>
        <h3>{i.title} &ensp;
        <span onClick={ ()=> { 
          const newLike = [...like];
          newLike[index]++;
          setLike(newLike) }}>👍</span>{like[index]}</h3><br/>
        <p>날짜</p>
      </div>
  ));
  return <div>
  {listItems}
</div>
}
function App() {
  const items =[
    {id:1, title:'영화 추천'},
    {id:2, title:'노래 추천'},
    {id:3, title:'책 추천'}];

    return (
      <div className="App">
        <header className="App-header">
          <p>3주차 리액트 실습</p>
        </header>
        <List items={items}></List>
      </div>
    );
}


export default App;


