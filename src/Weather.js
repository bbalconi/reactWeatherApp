import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import IconWidget from "./IconWidget.js";
import SearchBar from "./searchBar/SearchBar.js";
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


//  api key 4 l8tr = 3d6b633422451393e953dab4052ea0e4
//  url 4 l8tr  - http://api.openweathermap.org/data/2.5/weather?q=Bozeman&appid= 
class WeatherComponent extends React.Component {
  constructor() {
    super();
    this.getWeatherData = this.getWeatherData.bind(this);
    this.state = {
      initialized: false,
      urlTarget: "Bozeman",
      error:false
    };
  }
  getWeatherData(city) {
    if (this.state.initialized) {
      this.setState({
        initialized: false
      });
    }
    console.log(city);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d6b633422451393e953dab4052ea0e4';
    console.log(url);
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      this.weatherData = weatherObj;
      if(this.weatherData.cod == 200){
        console.log(this.weatherData.cod);
        this.setState({
          initialized: true,
          error: false
        });
      } else {
          this.setState({
            initialized:true,
            error:true
          });
        }
  });
}
  componentDidMount() {
    this.getWeatherData("Bozeman");
  }

  render() {
    if (this.state.initialized && !this.state.error) {
      return (
        <div>
          <h1>{this.weatherData.name}</h1>
          <WeatherTable weatherData={this.weatherData} />
          <IconWidget weatherData={this.weatherData} />
          <SearchBar getWeatherData={this.getWeatherData} />
        </div>
      );
    } else if (this.state.initialized && this.state.error) { 
      return(
        <div>
            <h2>You input a wrong city</h2>
            <SearchBar getWeatherData={this.getWeatherData} />
            </div>
      )
    } else {
      return (
        <h2>
          Loading...
        </h2>
        );
    }
  }
}

class WeatherTBody extends Component {
  render() {
    return (

      <tbody>
        <tr>
          <td>
            <Convert blark={this.props.weatherData} />
          </td>
          <td>
            {this.props.weatherData.main.pressure}
          </td>
          <td>
            {this.props.weatherData.main.humidity}
          </td>
        </tr>
      </tbody>
    );
  }
}

class Convert extends Component {
  constructor() {
    super()
  }
  render() {
    var temp = kelvinToFahrenheit(this.props.blark.main.temp);
    return (
      <div>
        {temp}
      </div>
    )
  }
}

class WeatherTable extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <WeatherTBody weatherData={this.props.weatherData} />
      </Table>
    )
  }
}


// Exercise 1:
//  In the table, we display the temperature in kelvin. Since we aren't
//  studying physics, that's not very useful. Build and use a react component
//  that converts the temperature to farenheit. 

// tip: So above, the jsx on line 61 will look something this:
//   ...<td>
//         <Farenheit temperature={this.props.weatherData.main.temp}>

// Exercise 2:
//  We need to "lift the state" so that multiple components can access the 
//  weather data that is being fetched from the api. So the first step is
//  to encapsulate all the table logic and templating and put it into it's own 
//  component. The app should still function and look the same, but we're passing 
//  the weather data into a child component instead of having everything inside
//  one component

// If you need help, here's some tips:
// step 1: make a new component, name it something appropriate, like "WeatherTable"
// step 2: inject the return value of the api into the new component, just like you
//         did with the kelvin converter. 
// step 3: render all the table templating inside of it. Feel free to copy and paste
//         to your hearts content!
export default WeatherComponent;
