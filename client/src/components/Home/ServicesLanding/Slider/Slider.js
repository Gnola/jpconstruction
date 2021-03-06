import React, {useState} from 'react';

// NEW CONSTRUCTION //
// import Kitchen1 from './sliderimgs/Kitchen1.jpg'
// import Kitchen2 from './sliderimgs/Kitchen2.jpeg'
import Living from './sliderimgs/Living.jpg'

// COMMERCIAL CONSTRUCTION //
// import Bar from './sliderimgs/Bar.jpg'
// import Dining from './sliderimgs/Dining.jpg'
import Fireplace from './sliderimgs/Fireplace.jpg'

// ADDITIONAL SERVICES //
import Barn from './sliderimgs/Barn.jpg'


const Slider = (props) => {

  let sliderArr = [
    Living,
    Fireplace,
    Barn
  ]

  let titleTextArr = [
    'Residential Construction',
    'Commercial Construction',
    'Additional Services'
  ]

  let descriptionTextArr = [
    'Energy-Efficient Homes, Green Building, Modular Homes and Multigenerational Homes',
    'Wineries, Businesses, Schools and Historic Buildings',
    'Demolition, Storm Shelters, Barn Design & Construction and Earthquake Retrofitting'
  ]

  let [x, setX] = useState(0)

  // // PREVIOUS
  // const prev = () => {
  //   x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
  //   // console.log(x);
  // }
  //
  // // NEXT
  // const next = () => {
  //   x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
  //   // console.log(x);
  // }

  // Dynamic Slider
  const go = () => {
    setTimeout(function () {
      x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
      // console.log(x);
    }, 5000);
  }

  go()

  return (
    <div id='Slider'>
        {
          sliderArr.map((src, index) => {
            return (
              <div className='SliderImg' style={{backgroundImage:`url(${src})`,transform:`translateX(${x}%)`}} key={index}>
                <div className='SliderText'>
                  <h1 className='SliderTitle' key={index}>{titleTextArr[index]}</h1>
                  <p className='SliderDescription' key={index+1}>{descriptionTextArr[index]}</p>
                  <a id='LearnMore' href='#Services' >Learn More ></a>
                </div>
              </div>
            )
          })
        }
        {/*
        <button id='prev' onClick={prev}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-left fa-3x'></i></button>
      <button id='next' onClick={next}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-right fa-3x'></i></button>*/}
    </div>
  )
}

export default Slider;
