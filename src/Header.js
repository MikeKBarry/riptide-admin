import React from 'react';

const Header = (props) => {
  return (
    <div id="Header">
      <div>
        <img src="/assets/images/icon.png" alt="logo" />
      </div>
      <div>
        <h1>riptide Administrator</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
