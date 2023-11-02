import React from 'react';

const Menu = ({ onClick }) => {

  return (
    <>      
      <div className={`navbtn`} onClick={onClick}>
        <span />
        <span />
        <span />
      </div>
    </>
  );
};

export default Menu;
