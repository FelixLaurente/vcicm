import React from 'react';
import '../App.css';
/* import { Button } from './Button'; */
import './HeroYouth.css';

function HeroYouth() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />                                                        
    </div>
  );
}

export default HeroYouth;

/*     <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            GET STARTED
        </Button>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
        >
            WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        */