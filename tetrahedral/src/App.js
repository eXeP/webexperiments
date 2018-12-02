import React, { Component } from 'react';
import tetralogosmall from './images/tetrasmall.png';
import parallel from './images/parallel.png';
import gpu from './images/gpu.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faArrowRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faArrowRight, faArrowCircleRight)
const Project = (props) => {
    return (
      <div class="max-w-sm bg-white mx-auto shadow-md rounded-lg overflow-hidden ml-4 mr-4 mb-8 p-2 " href={props.link}>
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto sm:mb-0 sm:mr-4 sm:ml-0" src={props.img} alt=""></img>
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-2xl  leading-tight">{props.name}</p>
                <p class="text-lg leading-tight text-grey-dark">{props.desc}</p>
              </div>
            </div>
          </div>
        </div>
  )
}

class Projects extends React.Component {
  render() {
    return (
      <div class="flex flex-row flex-wrap items-center justify-center items-stretch">
      <Project link="" name="Parallel programming"
                  desc="High performance thread-level and instruction-level parallel implementations can offer speedups of 100x." img={parallel}/>
        <Project link="" name="GPU programming" 
                 desc="CUDA/OpenCL implementations can speed up your application by 1000x." img={gpu}/>
        
      </div>
  )
  }
}


class App extends Component {
  componentDidMount(){
    document.title = "Tetrahedral Solutions"
  }
  render() {
    return (
        <div class="flex flex-col items-center justify-center sm:h-full md:h-full lg:h-screen xl:h-screen w-full bg-green-lightest">
          <div class="max-w-md bg-white mx-auto shadow-md rounded-lg overflow-hidden mb-8 mt-8 p-4">
            <div class="sm:flex sm:items-center px-6 py-4">
              <img class="block h-32 sm:h-24 mx-auto sm:mb-0 sm:mr-4 sm:ml-0" src={tetralogosmall} alt=""></img>
              <div class="text-center sm:text-left sm:flex-grow">
                <div class="mb-4">
                  <p class="text-3xl  leading-tight">Tetrahedral Solutions</p>
                  <p class="text-lg leading-tight text-grey-dark">We're a technical optimization consultancy based in Otaniemi, Espoo.</p>
                  <p class="text-lg leading-tight text-grey-dark">We have gathered top mathematical and programming talent from <b>Aalto University, Google and Nokia Bell Labs</b> and are doing software performance optimization and algorithmic problem-solving.</p>
                </div>
                <div>
                  <a  href="mailto:perttu.yli-opas@aalto.fi">
                    <button class="text-s font-semibold rounded-full
                                   px-4 py-1 leading-normal bg-white 
                                   border border-green text-green 
                                   hover:bg-green hover:text-white">Contact us</button>
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
