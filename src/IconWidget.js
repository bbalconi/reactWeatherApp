import React, { Component } from 'react';
  
export default class IconWidget extends Component {
  render () {
    var flark = this.props.weatherData;
    let iconURL = "http://openweathermap.org/img/w/" +  flark.weather[0].icon + ".png";
    return (
      <div>
          <img src={iconURL}/>
      </div>
    );
  }
}
