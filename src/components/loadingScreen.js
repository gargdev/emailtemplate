import React from 'react';
import '../styles/loadingscreen.css'; 

const loadingScreen = () => {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
};

export default loadingScreen;