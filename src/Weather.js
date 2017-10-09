import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import IconWidget from "./IconWidget.js";
import SearchBar from "./searchBar/SearchBar.js";
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


class WeatherComponent extends React.Component {
  constructor() {
    super();
    this.getWeatherData = this.getWeatherData.bind(this);
    this.state = {
      initialized: false,
      error:false
    };
  }
  getWeatherData(city) {
    if (this.state.initialized) {
      this.setState({
        initialized: false
      });
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d6b633422451393e953dab4052ea0e4';
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      this.weatherData = weatherObj;
      console.log(this.weatherData);
      
      if(this.weatherData.cod == 200){
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
          <SearchBar getWeatherData={this.getWeatherData} />
        </div>
      );
    } else if (this.state.initialized && this.state.error) { 
      return(
        <div>
            <h2>Invalid Input</h2>
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
            {this.props.weatherData.main.humidity}%
          </td>
          <td>
            <IconWidget weatherData={this.props.weatherData}/>
            {this.props.weatherData.weather[0].description}
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
        {temp}°F
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
            <th>Conditions</th>
          </tr>
        </thead>
        <WeatherTBody weatherData={this.props.weatherData} />
      </Table>
    )
  }
}

export default WeatherComponent;
