import React, { useState } from 'react';

export function List(props){
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