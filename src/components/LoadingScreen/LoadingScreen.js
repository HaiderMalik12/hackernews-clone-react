import React from 'react';
import Loader from 'react-loader-spinner';
const LoadingScreen = props => {
  return (
    <div>
      <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
    </div>
  );
};

export default LoadingScreen;
