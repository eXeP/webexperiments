import React, { Component } from 'react';

const Sisalto = ({osat}) => {
  return (
    <ul>
      {osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
    </ul>
  )
}

const Kurssi = ({kurssi}) => {
  const osia = () => kurssi.osat.reduce((sum, osa) => sum+osa.tehtavia, 0)
  return (
    <div>
      <h1>{kurssi.nimi}</h1>
      <Sisalto osat={kurssi.osat}/>
      <p>yhteensä {osia()} tehtävää</p>
    </div>
  )
}

export default Kurssi;