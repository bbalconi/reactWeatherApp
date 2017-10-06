import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
var FontAwesome = require('react-fontawesome');



// This exercise is getting building a component different from the weather table
// that will utilize the api data. Based on weather description found in the 
// api response, render the following icons:
//  http://fontawesome.io/icon/umbrella/
//  http://fontawesome.io/icon/cloud/
//  http://fontawesome.io/icon/sun-o/
// Try to support some of these descriptions: https://openweathermap.org/weather-conditions
// Don't feel like you have to support them all, just a few, some that reflect the icons.
// Display them next to weather description, and put them inside a react-strap card.
// In the title of the card, display the city. 
// We're going to have this rendered beneath the table.

// tips:
//  First, lets get the react-strap card working. Go to https://reactstrap.github.io/components/card/,
//  copy and paste their example into your render() method.Put some 
//  sample data inside and mess around with it to get a feel how it works. 
//  Next, get the proper props passed in, the weather data through the weather API.
//  Next, let's get font awesome working - I've imported the library "react-fontawesome"
//  Go to the readme located at https://github.com/danawoodman/react-fontawesome
//  to see some ways in which it is used. 
//  Here's an example of how I used the card and the fontawesome libs:
//  <Card>
//    <CardBody>
//     <CardTitle>{title}</CardTitle>
//       <CardSubtitle>Clear sky</CardSubtitle>
//       <FontAwesome
//         className ="{font awesome classes}"
//         name="{name}"
//         size="2x"
//        />
//      </CardBody>
//    </Card>   
// So now get it working to render the proper font-awesome icon! There's many
// ways to do this. 
// Here's a screenshot of what mine looks like. (It's stand alone, no table in it yet)
class IconWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      icon: ""
    };
    
  }
  
  componentDidMount () {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bozeman&appid=3d6b633422451393e953dab4052ea0e4';
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      this.data = weatherObj;
      this.setState({
        icon: this.data.weather[0].icon
      });
    });
  }
  
  render () {
    var flark = this;
    console.log(this.data);
    // let iconURL = "http://openweathermap.org/img/w/" +  this.data.weather.icon + ".png";
    return (
      <Card>
        <CardImg top width='100%' src={this.data} alt="Card image cap" />
        <CardBody>
          <CardTitle>Bozeman</CardTitle>
          <CardSubtitle>Clear sky</CardSubtitle>
          <FontAwesome
            className ="fa fa-sun-o"
            name="umbrella"
            size="2x" />
        </CardBody>
      </Card>   

    );
  }
}
export default IconWidget;
