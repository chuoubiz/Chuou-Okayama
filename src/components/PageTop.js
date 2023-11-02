import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
const PageTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) { // 100はスクロール量のしきい値です。適宜変更してください。
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
        duration: 100, // アニメーションの時間（ミリ秒）
      });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default PageTop;
