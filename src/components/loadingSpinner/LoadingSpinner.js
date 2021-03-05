import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

function LoadingSpinner({ loading }) {
  return <ClipLoader loading={loading} color='#fff' size={30} />;
}

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingSpinner;
