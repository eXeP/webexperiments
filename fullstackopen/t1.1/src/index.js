import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
	return (
		<h1>{props.kurssi.nimi}</h1>
	)
}
const Sisalto = (props) => {
	return (
		<div>
			<Osa first={props.osat[0].nimi} second={props.osat[0].tehtavia}/>
			<Osa first={props.osat[1].nimi} second={props.osat[1].tehtavia}/>
			<Osa first={props.osat[2].nimi} second={props.osat[2].tehtavia}/>
		</div>
	)
}
const Osa = (props) => {
	return (
		<p>{props.first} {props.second}</p>
	)
}
const Yhteensa = (props) => {
	return (
		<p>yhteensä {props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia}</p>
	)
}

const App = () => {
 const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)