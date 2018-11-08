import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: new Array(anecdotes.length).fill(0)
    }
  }

  nextAnectode = () => {
  	let nextSel = Math.floor(Math.random()*anecdotes.length)
  	while (nextSel === this.state.selected) {
  		nextSel = Math.floor(Math.random()*anecdotes.length)
  	}
  	this.setState({selected: nextSel})
  }

  voteThis = () => {
  	let newVotes = [...this.state.votes]
  	newVotes[this.state.selected] = newVotes[this.state.selected]+1
  	this.setState({votes: newVotes})
  }

  render() {
  	const bestAnecdote = () => anecdotes[this.state.votes.indexOf(Math.max.apply(Math, this.state.votes))]
    return (
      <div>
	      <div>
	        {this.props.anecdotes[this.state.selected]}
	      </div>
	      <button onClick={this.voteThis} >vote</button>
	      <button onClick={this.nextAnectode} >next anecdote</button>
	      <h1>anecdote with most votes:</h1>
	      <p>{bestAnecdote()}</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)