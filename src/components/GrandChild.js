import React, { useContext } from 'react';
import RootContext from '../RootContext';


function GrandChild() {
    const data = useContext(RootContext);

  return (
    <div>
      <p>{data.number}</p>
      <p>{data.text}</p>
      <p><button onClick={data.func}>A Button</button></p>
    </div>
  )
}

export default GrandChild;
