import React, { Component } from 'react';

export default class BaiDu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    console.log(this.props.location.query, '路由')
    return(
      <div>这是百度</div>
    )
  }
}