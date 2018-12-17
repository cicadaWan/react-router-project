
import React, { Component } from 'react';
import { useState } from 'react';
import './index.less';

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>click me</button>
    </div>
  )
}
// export default class BaiDu extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//     }
//   }
//   render(){
//     return(
//       <div className="home-container">这是home</div>
//     )
//   }
// }