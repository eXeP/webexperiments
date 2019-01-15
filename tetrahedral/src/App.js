import React, { Component } from 'react';
import tetrasmall from './images/tetrasmall.png';
import tetra from './images/tetra.png';
import tetrawhite from './images/tetrawhite.png';
import parallel from './images/parallel.png';
import gpu from './images/gpu.jpg';
import algo from './images/algo.jpg';
import './App.css';


class App extends Component {
  componentDidMount(){
    document.title = "Tetrahedral Solutions - optimizing software"
  }
  render() {
    return (
      <div class="">
        <section class="flex flex-row flex-wrap justify-center w-full p-10 sm:pt-32 sm:pb-32 bg-blue-custom">
          <img class="hidden sm:block block h-32 sm:h-24 md:mr-16" src={tetrawhite} alt=""></img>
          <img class="sm:hidden block h-32 sm:h-24 md:mr-16" src={tetrasmall} alt=""></img>
          <div class="max-w-sm md:ml-16 mt-8 xl:mt-0">
            <h1 class="mb-6 text-center sm:text-left">Tetrahedral Solutions</h1>
            <p class="mb-2">We're a technical optimization consultancy based in Otaniemi, Espoo.</p>
            <p class="">Top talent from Aalto University, Google and Nokia Bell Labs, doing software performance optimization and algorithmic problem-solving.</p>
            <div class="text-center sm:text-left">
              <a  href="mailto:team@tetrahedral.solutions">
                <button class="mt-8 text-xl font-semibold rounded-full
                                   px-4 py-1 leading-normal
                                   border-2 border-white text-white 
                                   hover:bg-white hover:text-black">Contact us</button>
              </a>
            </div>
          </div>
        </section>
        <section class="flex flex-row flex-wrap justify-center p-4 sm:pt-32 sm:pb-32 bg-white-custom">
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

        <section class="flex flex-row flex-wrap justify-center p-4 sm:pt-32 sm:pb-32 bg-blue-custom">
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

    );
  }
}

export default App;
