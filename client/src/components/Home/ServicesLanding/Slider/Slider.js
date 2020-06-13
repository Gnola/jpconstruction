import React, {useState, useEffect} from 'react';
// import Images from './Images.js';

// NEW CONSTRUCTION //
// import Kitchen1 from './sliderimgs/Kitchen1.jpg'
import Kitchen2 from './sliderimgs/Kitchen2.jpeg'

// COMMERCIAL CONSTRUCTION //
// import Bar from './sliderimgs/Bar.jpg'
// import Dining from './sliderimgs/Dining.jpg'
import Fireplace from './sliderimgs/Fireplace.jpg'

// ADDITIONAL SERVICES //
import Barn from './sliderimgs/Barn.jpg'




const Slider = (props) => {

  let sliderArr = [
    Kitchen2,
    Fireplace,
    Barn
  ]

  let titleTextArr = [
    'New Construction',
    'Commercial Construction',
    'Additional Services'
  ]

  let descriptionTextArr = [
    'heres something',
    'heres more',
    'and this too'
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



  return (
    <div className='Slider'>
        {
          sliderArr.map((src, index) => {
            return (
              <div className='SliderImg' style={{backgroundImage:`url(${src})`,transform:`translateX(${x}%)`}}>
                <div className='SliderText'>
                  <h1 className={index % 2 === 0 ? 'SliderTitle' : 'SliderTitleAlt'} key={index}>{titleTextArr[index]}</h1>
                  <p className={index % 2 === 0 ? 'SliderDescription' : 'SliderDescriptionAlt'} key={index}>{descriptionTextArr[index]}</p>
                  <a id='LearnMore' onClick={()=> props.toggleView('services')}>Learn More ></a>
                </div>
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
// let sliderArr = [
//   <Images src='https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'/>,
//   <Images src='https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'/>,
//   <Images src='https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'/>
// ]
// <div className='Slider'>
//     {
//       sliderArr.map((image, index) => {
//         return (
//           <div key={index} className='SliderImg' style={{transform:`translateX(${x}%)`}}>
//             {image}
//           </div>
//         )
//       })
//     }
//     <button id='prev' onClick={prev}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-left fa-3x'></i></button>
//   <button id='next' onClick={next}><i style={{color:'rgba(255,255,255,.5)'}} className='fas fa-chevron-right fa-3x'></i></button>
// </div>
//
