import React from 'react';

const App = () => {
  return (
    <div className='app-header'>
      <h1>My first React Project!</h1>
      <p>React-Sass-Airbnb Boilerplate to start working on</p>
      <div className='logos'>
        <div className='row'>
          <div className='col-sm-2'><img src='./assets/webpack-logo.png' alt='webpack' /></div>
          <div className='col-sm-2'><img src='./assets/react-logo.png' alt='react' /></div>
          <div className='col-sm-2'><img src='./assets/babel-logo.svg' alt='babel' /></div>
          <div className='col-sm-2'><img src='./assets/sass-logo.png' alt='sass' /></div>
          <div className='col-sm-2'><img src='./assets/eslint-logo.svg' alt='eslint' /></div>
          <div className='col-sm-2'><img src='./assets/airbnb-logo.svg' alt='airbnb' /></div>
        </div>
      </div>
    </div>
  );
};

export default App;
