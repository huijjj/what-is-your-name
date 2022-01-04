import React from 'react';
import imgCamp from './img.png';
import './Header.css';

const Header = ({onChangePage}) => {

    return(
      <>
        <div className='menu'>
          <div className='menu-text' onClick={() => onChangePage(1)}>
            1단계
          </div>
          <div className='menu-text' onClick={() => onChangePage(2)}>
            2단계
          </div>
        </div>
        <div className='header'>
          <img src={imgCamp}/>
          <div>
            <span className='header-text'>3분반 이름맞추기</span>
          </div>
        </div>
      </>
      
    )
}

export default Header;