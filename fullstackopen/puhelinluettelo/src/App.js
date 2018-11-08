import React from 'react';
import axios from 'axios'

const Luettelo = ({visiblePersons}) => {
  return (
    <div>
      <h2>Numerot</h2>
        {visiblePersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

const Rajaus = (props) => {
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    props.handleSearchChange(event.target.value)
  }
  return (
    <div>
      <div>
            rajaa: <input
            onChange={handleSearchChange}/>
          </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      search: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/db')
      .then(response => {
        console.log('promise fulfilled', response.data.persons)
        this.setState({ persons: response.data.persons })
      })
  }

  addName = (event) => {
    event.preventDefault()
    const po = {name: this.state.newName, number: this.state.newNumber}
    const persons = this.state.persons.concat(po)

    if (!this.state.persons.some(person => person.name === po.name)) {
      this.setState({
        persons: persons
      })
    }
  }

  handleSearchChange = (newSearch) => {
    this.setState({ search: newSearch})
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    const visiblePersons = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Rajaus handleSearchChange={this.handleSearchChange}/>
        <h1> lisää uusi</h1>
        <form>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input
            value={this.state.newNumber}
            onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit" onClick={this.addName}>lisää</button>
          </div>
        </form>
        <Luettelo visiblePersons={visiblePersons}/>
      </div>
    )
  }
}

export default App;