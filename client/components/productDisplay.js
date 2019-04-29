import React from 'react';

const ProductDisplay = props => {
  let style;
  if (props.type === props.selectedItem) {
    style = {
      backgroundColor: 'lightBlue'
    }
  } else {
    style = {
      backgroundColor: 'yellow'
    }
  }
  const handleClick = e => {
    props.selectItemClickHandler(e);
  };
  return (
    <div onClick={handleClick} style={style} id={props.type}>
      <ul>
        <li> {props.type} </li>
        <li> {props.image} </li>
        <li> {props.description} </li>
        <li> {props.price} </li>
        <li> {props.inStock === true ? 'Available' : 'Out of Stock'} </li>
      </ul>
    </div>
  );
};

export default ProductDisplay;