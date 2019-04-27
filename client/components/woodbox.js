import React from 'react';
import Header from './header';


const WoodBox = (props) => {
  return (
    <div>
      <ul>
        <li> {props.type} </li>
        <li> {props.price} </li>
      </ul>
    </div>
  );
};

export default WoodBox;
