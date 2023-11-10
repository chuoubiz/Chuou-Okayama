import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TelNo from './TelNo';
const ContactParts = () => {
  return (
    <>
      <section id='contact'>
        <div className='main-content'>
          <h3>
            話しやすい相談員が
            <br className='smp' />
            親身になって応対します
          </h3>
          <TelNo />
          <p className='center'>
            <Link to='/toiawase/' className='contact_bt'>
              <FontAwesomeIcon icon={faEnvelope} /> お問い合わせフォームはこちら
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactParts;
