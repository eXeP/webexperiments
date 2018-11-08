import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Nappi = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
	if (!isNaN(props.keskiarvo)) {
		return (
		<div>
			<Otsikko text="statistiikka"/>
		    <table>
			    <tbody>
				    <Statistic text="hyvä" value={props.state.hyva}/>
				    <Statistic text="neutraali" value={props.state.neutraali}/>
				    <Statistic text="huono" value={props.state.huono}/>
				    <Statistic text="keskiarvo" value={props.keskiarvo}/>
				    <Statistic text="positiivisia" value={props.positiivisia}/>
			    </tbody>
		    </table>
	    </div>
	    )
	} else {
		return (
		<div>
			<Otsikko text="statistiikka"/>
		    <em> ei palautetta </em>
	    </div>
	    )
	}
}

const Statistic = (props) => {
  return (
    <tr>
    	<td>{props.text}</td>
    	<td>   {props.value}</td>
    </tr>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  
  addOne = (feedback) => () => {
  	let newState = this.state
  	newState[feedback] = newState[feedback]+1
    this.setState(newState)
  }

  render() {
  	const laskeKeskiarvo = () => ((this.state.hyva-this.state.huono)/(this.state.hyva+this.state.neutraali+this.state.huono))
  	const positiivisia = () => ((this.state.hyva)/(this.state.hyva+this.state.neutraali+this.state.huono))*100 + "%"

    return (
      <div>
        <Otsikko text="anna palautetta"/>
        <div> 
        	<Nappi text="hyvä" onClick={this.addOne("hyva")}/>
        	<Nappi text="neutraali" onClick={this.addOne("neutraali")}/>
        	<Nappi text="huono" onClick={this.addOne("huono")}/>
        </div>
        <Statistics state={this.state} keskiarvo={laskeKeskiarvo()} positiivisia={positiivisia()}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
