import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Nav from './Nav';

const Header = () => {
  const [navClicked, setNavClicked] = useState(false);

  const handleNavClick = () => {
    setNavClicked(!navClicked);
  };

  useEffect(() => {
    // navClicked の状態に応じて body のクラスを更新
    if (navClicked) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [navClicked]);

  return (
    <>
      <header id='header'>
        <div id='header-inner'>
          <h1>岡山で探偵実績50年以上 │ 浮気調査は総合探偵社中央リサーチ岡山</h1>
          <div className='h_logo'>
            <Link to='/'>
              <img src='/images/logo.png' width={260} height={43} alt='' />
            </Link>
          </div>
          <div className='h_tool'>
            <a href='tel:0120-30-6630' className='h_tel_link'>
              <img src='/images/tel.png' width={250} height={50} alt='' />
            </a>
            <Link to='/toiawase/' className='bt_mail'>
              <FontAwesomeIcon icon={faEnvelope} /> メールでご相談
            </Link>
            <a href='https://line.me/R/ti/p/65gpK3qcDs' className='bt_line' target='_blank' rel='noopener noreferrer'>
              <img src='/images/line_icon.svg' alt='' />
            </a>
          </div>
          <div className={`navbtn ${navClicked ? 'active' : ''}`} onClick={handleNavClick}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <Nav navClicked={navClicked} />
      </header>
    </>
  );
};

export default Header;
