import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import './multipod.css'

const Popup = ({ currentStage }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  if (currentStage === 1) {
    return (
      <div>
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Hi, I'm<span className='font-semibold mx-2 text-white'>Aviral</span>👋
          <br />
          A <a href="#multipod" onClick={handleClick} className='coco'>multipod</a> for now.
        </h1>
        {showPopup && (
          <div className="popup">
            <p>Multipod, (n.): Someone who thrives on many interests,
              projects and passions, simultaneously, cyclically
              or one after another.</p>
            <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked on many projects<br />and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img
            src={arrow}
            alt='arrow'
            className='w-4 h-4 object-contain arrow-black'
            style={{ filter: 'grayscale(100%) brightness(4)' }}
          />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Curious about the projects?
        </p>
  
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img
            src={arrow}
            alt='arrow'
            className='w-4 h-4 object-contain arrow-black'
            style={{ filter: 'grayscale(100%) brightness(4)' }}
          />
        </Link>
      </div>
    );
  }
  
  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Need a project done or looking for a dev or 3D artist?
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img
            src={arrow}
            alt='arrow'
            className='w-4 h-4 object-contain arrow-black'
            style={{ filter: 'grayscale(100%) brightness(4)' }}
          />
        </Link>
      </div>
    );
  }

  return null; // Default case when currentStage doesn't match any condition
}

export default Popup;