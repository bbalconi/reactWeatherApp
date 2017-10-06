import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');

//So hopefully we have a bunch of components and our 'state' is being managed in only
//one of them (the 'top' most, the one making the api call). Now lets build a 
//new component that has an <input> and <button> that can be clicked. Use
//react-strap for the button and input. Now go to the 'top' most component and wrap your
//logic fetching all the weather api data into a method. Pass that method down
//into this new component and call it when the user clicks on the button. 

//Before the function calls the api, you'll
//need to generate a new url string where you inject the city name into
//the url string (look "bozeman" is, the "url" var in Weather.js)
//Use react "state" in this function to automatically update the table and iconWidget
//to reflect the changes. 

//the user will type a city name into the <input> and when
//the user clicks the button, you'll generate a new url using their input.
//call the api and render the table and iconWidget. Hopefully, you won't have to
//update anything on either component. 
 
//render the search bar above the table and icon widget

//tips: you'll need to use react-strap, so import the react-strap components you want to grab
// we're not doing in validation, so the user can input the incorrect value. 
// if you have time, make a new react state that accounts for this. The table and
// icon could be omitted from the page and instead it says "you did not input a real city"

//You've pretty much built a react app!!!!

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
    })
  }
  clicked(a){
    console.log(a.target.value);
    this.props.getWeatherData(this.state.urlTarget);
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <input id="stupid-users-input" type="text" name="urlTarget" value={this.state.urlTarget} onChange={this.handleInput}/>
        <button onClick={this.clicked} />
      </div>
    );
  }
}