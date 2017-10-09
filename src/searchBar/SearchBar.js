import React, { Component } from 'react';
import { Input, Button } from 'reactstrap'

 export default class SearchBar extends Component{
  constructor(){
    super();
    this.clicked = this.clicked.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state={
      urlTarget: ""
    }
  }
  handleInput(e){
    this.setState({
      urlTarget: e.target.value
    });
  }
  clicked(a){
    this.props.getWeatherData(this.state.urlTarget);
  }
  render(){
    return (
      <div>
        <Input type="text" value={this.state.urlTarget} onChange={this.handleInput}/>
        <Button color="primary" onClick={this.clicked}>Go</Button>
      </div>
    );
  }
}