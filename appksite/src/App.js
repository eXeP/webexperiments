import React, { Component } from 'react';
import logo from './images/appklogo3_med.png';
import ttlogo from './images/ic_launcher.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faArrowRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faArrowRight, faArrowCircleRight)
const Project = (props) => {
    return (
      <div class="max-w-sm bg-white mx-auto shadow-md rounded-lg overflow-hidden mb-8 p-2 " href={props.link}>
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto sm:mb-0 sm:mr-4 sm:ml-0" src={props.img} alt=""></img>
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-2xl  leading-tight">{props.name}</p>
                <p class="text-lg leading-tight text-grey-dark">{props.desc}</p>
              </div>
              <div>
                <button class="text-xs font-semibold rounded-full
                               px-4 py-1 leading-normal bg-white 
                               border border-blue text-blue 
                               hover:bg-blue hover:text-white" 
                               onClick={()=> window.open(props.link, "_blank")}>Käy sivulla <FontAwesomeIcon icon="arrow-circle-right" /></button>
              </div>
            </div>
          </div>
        </div>
  )
}

class Projects extends React.Component {
  render() {
    return (
      <div class="flex flex-row">
        <Project link="http://taskutaulukot.fi" name="Taskutaulukot" 
                 desc="Digitaalinen taulukkokirja lukiolaisille" img={ttlogo}/>
      </div>
  )
  }
}


class App extends Component {
  componentDidMount(){
    document.title = "APPK Solutions"
  }
  render() {
    return (
      <div class="flex flex-col items-center justify-center h-screen w-full bg-blue-lightest">
        <div class="max-w-md bg-white mx-auto shadow-md rounded-lg overflow-hidden mb-8 p-4">
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-32 sm:h-24 rounded-full mx-auto sm:mb-0 sm:mr-4 sm:ml-0" src={logo} alt=""></img>
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-3xl  leading-tight">APPK Solutions</p>
                <p class="text-lg leading-tight text-grey-dark">Ohjelmistokehitystä suunnittelusta toteutukseen</p>
              </div>
              <div>
                <a  href="mailto:appksolutions@gmail.com">
                  <button class="text-xs font-semibold rounded-full
                                 px-4 py-1 leading-normal bg-white 
                                 border border-purple text-purple 
                                 hover:bg-purple hover:text-white">Ota yhteyttä</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Projects/>
      </div>
    );
  }
}

export default App;
