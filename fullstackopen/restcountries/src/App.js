import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const Country = ({country, setCountry}) => {
  const handleClick = () => {
    setCountry(country.name)
  }

  return (
    <div onClick={handleClick}>
      <p>{country.name}</p>
    </div>
  )
}

const Countries = ({countries, setCountry}) => {
  console.log('naytetaan ', countries.length)
  if (countries.length > 10) {
    return (
      <div>
          <p>too many </p>
      </div>
    )
  } else if (countries.length == 1) {
    return (<div>
          <h1>{countries[0].name} {countries[0].nativeName}</h1>
          <p>capital: {countries[0].capital}</p>
          <p>population: {countries[0].population}</p>
          <img src={countries[0].flag} alt="Suntriesmiley face" height="200" width="300"/>
    </div>)
  } else {
    return (
      <div>
          {countries.map(country => <Country key={country.name} country={country} setCountry={setCountry}/>)}
      </div>
    )
  }
}

class App extends Component {
   constructor(props) {
    super(props)
    this.state = {
      countries: [],
      country: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled', response.data)
        this.setState({ countries: response.data })
      })
  }

  handleCountryChange = (event) => {
    console.log(event.target.value)
    this.setState({ country: event.target.value })
  }

  setCountry = (newCountry) => {
    this.setState({ country: newCountry })
  }

  render() {
    console.log('cc ', this.state.countries.length)
    const visibleCountries = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.country.toLowerCase()))
    return (
      <div>
        <form>
            <div>
              find countries: <input 
              value={this.state.country}
              onChange={this.handleCountryChange}/>
            </div>
        </form>
        <Countries countries={visibleCountries} setCountry={this.setCountry}/>
      </div>
    );
  }
}

export default App;
