import React from 'react';
import imgCamp from './img.png';
import './Header.css';

const Header = ({score, showScore}) => {

    return (
      <div className='header'>
        <div className='header-title'>
          <img src={imgCamp}/>
          <div className='header-text'>3분반 이름맞추기</div>
        </div>
        { showScore ? <div className='header-score'>{score}</div> : <></> }
      </div>
    );
}

export default Header;