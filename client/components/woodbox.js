import React from 'react';

const WoodBox = props => {
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