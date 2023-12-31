import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/vcicm/images/img-9.jpg'
              text='SAMPLE TEXT'
              label='MANDALUYONG CHAPTER' 
              path='/mandaluyong'
            />
            <CardItem
              src='/vcicm/images/img-2.jpg'
              text='SAMPLE TEXT'
              label='CUBAO CHAPTER'
              path='/cubao'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/vcicm/images/img-3.jpg'
              text='SAMPLE TEXT'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/vcicm/images/img-4.jpg'
              text='SAMPLE TEXT'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/vcicm/images/img-8.jpg'
              text='SAMPLE TEXT'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;