import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";

const FootBt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 100; // スクロールしきい値（ピクセル単位）

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className={`slide-in-element ${isVisible ? 'visible' : ''}`} >
      <ul className="foot_bt">
        <li className="f_mail_bt">
          <Link to="/toiawase/">
            <img src="/images/h_mail.svg" width="40px" alt="" />
            メールで相談
          </Link>
        </li>
        <li className="f_line_bt">
          <a href="https://line.me/R/ti/p/65gpK3qcDs" target="_blank">
            <img src="/images/line_icon.svg" width="40px" alt="" />
            LINEで相談
          </a>
        </li>
        <li className="f_tel_bt">
          <a href="tel:0120-30-6630">
            <img src="/images/h_tel.svg" width="40px" alt="" />
            電話で相談
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FootBt;
