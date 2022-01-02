import React from 'react';
import imgCamp from './img.png';
import './style.css';

const Header = () => {

    return(
      <div className='header'>
        <img src={imgCamp}/>
        <div>
          <span className='header-text'>3분반 이름맞추기</span>
        </div>
      </div>
    )
}

export default Header;