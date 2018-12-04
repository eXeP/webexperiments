import React, { Component } from 'react';
import tetrasmall from './images/tetrasmall.png';
import tetra from './images/tetra.png';
import tetrawhite from './images/tetrawhite.png';
import parallel from './images/parallel.png';
import gpu from './images/gpu.jpg';
import algo from './images/algo.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faArrowRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faArrowRight, faArrowCircleRight)
const Project = (props) => {
    return (
      <div class="max-w-sm bg-white mx-auto shadow-md rounded-lg overflow-hidden ml-4 mr-4 mb-6 p-2 " href={props.link}>
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto sm:mb-0 sm:mr-4 sm:ml-0" src={props.img} alt=""></img>
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-2xl  leading-tight">{props.name}</p>
                <p class="text-lg leading-tight text-grey-dark">{props.desc}</p>
              </div>
              <button class=" hidden text-xs font-semibold rounded-full
                               px-4 py-1 leading-normal bg-white 
                               border-2 border-blue text-blue 
                               hover:bg-blue hover:text-white relative pin-b" 
                               onClick={()=> window.open(props.link, "_blank")}>Read more <FontAwesomeIcon icon="arrow-circle-right" /></button>
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
      <Project link="" name="GPU computation" 
                 desc="CUDA/OpenCL implementations can speed up your application by 1000x." img={gpu}/>
      <Project link="" name="Algorithmic optimization" 
                 desc="State-of-the-art algorithmic techniques can take your runtime from hours to seconds." img={algo}/>
        
      </div>
  )
  }
}

class Customers extends React.Component {
  render(props) {
    return (
      <div class="max-w-md bg-white mx-auto shadow-md rounded-lg overflow-hidden mb-8 p-4">
        <div class="sm:flex sm:items-center px-6 py-4">
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4 text-center">
              <p class="text-2xl leading-tight mb-4">Any software written over 10 years ago can be sped up by 90%</p>
              <p class="text-2xl leading-tight mb-4">We're here to do it for you</p>
              <p class="text-2xl leading-tight mb-4">You pay only a percentage of direct cost savings</p>
              <p class="text-2xl leading-tight mb-4">How?</p>
            </div>
            <Projects/>
          </div>
        </div>
      </div>
    )
  }
}


class App extends Component {
  componentDidMount(){
    document.title = "Tetrahedral Solutions - optimizing software"
  }
  render() {
    return (
      <div class="">
        <section class="flex flex-row flex-wrap justify-center w-full p-10 md:p-32 bg-blue-custom">
          <img class="hidden sm:block block h-32 sm:h-24 md:mr-16" src={tetrawhite} alt=""></img>
          <img class="sm:hidden block h-32 sm:h-24 md:mr-16" src={tetrasmall} alt=""></img>
          <div class="max-w-sm md:ml-16 mt-8 xl:mt-0">
            <h1 class="mb-6 text-center sm:text-left">Tetrahedral Solutions</h1>
            <p class="mb-2">We're a technical optimization consultancy based in Otaniemi, Espoo.</p>
            <p class="">Top talent from Aalto University, Google and Nokia Bell Labs, doing software performance optimization and algorithmic problem-solving.</p>
            <div class="text-center sm:text-left">
              <a  href="mailto:perttu.yli-opas@aalto.fi">
                <button class="mt-8 text-xl font-semibold rounded-full
                                   px-4 py-1 leading-normal
                                   border-2 border-white text-white 
                                   hover:bg-white hover:text-black">Contact us</button>
              </a>
            </div>
          </div>
        </section>
        <section class="flex flex-row flex-wrap justify-center p-4 sm:p-32 bg-white-custom">
          <div class="max-w-sm md:ml-16 mt-8 md:mt-0 p-1">
            <h1 class="mb-6 text-center sm:text-left">We optimize anything</h1>
            <p class="mb-2">Did you know that almost any software written over 10 years ago can be sped up by 90%?</p>
            <p class="">Our experts at parallelization, GPU computation and algorithmic design can always speed up your applications, sometimes achieving speedups of 1000x.</p>
          </div>

          <div class="max-w-sm md:ml-16 mt-8 md:mt-0 p-1 mb-8">
            <h1 class="mb-6 text-center sm:text-left">You pay only for results</h1>
            <p class="mb-2">We put ourselves on the line. You pay only a percentage of direct cost savings.</p>
            <p class=""> Full confidentiality. We are flexible and can work under strict NDAs and restricted environments.</p>
          </div>
        </section>

        <section class="flex flex-row flex-wrap justify-center p-4 sm:p-32 bg-blue-custom">
          <div class="max-w-sm sm:ml-16 mt-8 sm:mt-0 p-1">
            <h1 class="mb-6 text-center sm:text-left">Parallel programming</h1>
            <p class="mb-2">High performance thread-level and instruction-level parallel implementations can offer speedups of 100x.</p>
          </div>

          <div class="max-w-sm sm:ml-16 mt-8 sm:mt-0 sm:mb-8 p-1">
            <h1 class="mb-6 text-center sm:text-left">GPU computation</h1>
            <p class="mb-2">CUDA implementation can speed up your application by 1000x.</p>
          </div>

          <div class="max-w-sm sm:ml-16 mt-8 sm:mt-0 p-1 mb-8">
            <h1 class="mb-6 text-center sm:text-left">Algorithmic optimization</h1>
            <p class="mb-2">State-of-the-art algorithmic techniques can take your runtime from hours to seconds.</p>
          </div>
        </section>
      </div>

    )
  }
  
















































  render2() {
    return (
        <div class="flex flex-col items-center justify-center sm:h-full md:h-full lg:h-full xl:h-full w-full bg-green-lightest">
          <div class="max-w-md bg-white mx-auto shadow-md rounded-lg overflow-hidden mb-8 mt-8 p-4">
            <div class="sm:flex sm:items-center px-6 py-4">
              <img class="block h-32 sm:h-24 mx-auto sm:mr-0 sm:pr-0 pr-8" src={tetrasmall} alt=""></img>
              <div class="text-center sm:text-left sm:flex-grow sm:pl-0 pl-8">
                <div class="mb-4">
                  <h1 class="text-3xl leading-tight">Tetrahedral Solutions</h1>
                  <p class="text-lg leading-tight text-grey-dark">We're a technical optimization consultancy based in Otaniemi, Espoo.</p>
                  <p class="text-lg leading-tight text-grey-dark">We have gathered top mathematical and programming talent from Aalto University, Google and Nokia Bell Labs and are doing software performance optimization and algorithmic problem-solving.</p>
                </div>
                <div>
                  <a  href="mailto:perttu.yli-opas@aalto.fi">
                    <button class="text-xl font-semibold rounded-full
                                   px-4 py-1 leading-normal bg-white 
                                   border-2 border-green text-green 
                                   hover:bg-green hover:text-white">Contact us</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Customers/>
          
        </div>
    );
  }
}

export default App;
