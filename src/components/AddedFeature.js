import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/additionalActions' 


const AddedFeature = props => {
  console.log('added', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={() => props.removeFeature(props.feature)}
      >X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null, { removeFeature })(AddedFeature);
