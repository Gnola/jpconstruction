import React, {useState, useEffect} from 'react';
import Images from './Images.js';
import one from './sliderimgs/one.jpeg';
import two from './sliderimgs/2.jpeg';
import three from './sliderimgs/3.jpeg';
import four from './sliderimgs/4.jpeg';

const Slider = () => {

  let sliderArr = [
    <Images src={one}/>,
    <Images src={two}/>,
    <Images src={three}/>,
    <Images src={four}/>
  ]

  const [x, setX] = useState(0)

  // PREVIOUS
  const prev = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    console.log(x);
  }

  // NEXT
  const next = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    console.log(x);
  }

  // Timeout
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     next()
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Interval
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     next()
  //   }, 5000);
  // });

  return (
    <div className='Slider'>
        {
          sliderArr.map((image, index) => {
            return (
              <div key={index} className='SliderImg' style={{transform:`translateX(${x}%)`}}>
                {image}
              </div>
            )
          })
        }
        <button id='prev' onClick={prev}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-left fa-3x'></i></button>
      <button id='next' onClick={next}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-right fa-3x'></i></button>
    </div>
  )
}

export default Slider;
