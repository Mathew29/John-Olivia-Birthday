import React from 'react';
import PropTypes from 'prop-types';
import './Picture.css'

const Picture = ({pic}) => {
const {index, picture} = pic;
return(
  <div id={`pic-${index}`} className="pic">
    <img src={picture} alt={index} />
  </div>
)
}
export default Picture