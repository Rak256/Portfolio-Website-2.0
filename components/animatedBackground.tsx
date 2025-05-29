// pages/index.js
"use client";

import React from 'react';
import AnimatedBackground from 'animated-backgrounds';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js with Animated Backgrounds</h1>
      <AnimatedBackground animationName="starryNight" 
       blendMode="screen"  // Optional: Add blend mode for visual effects

      />
    </div>
  );
};  

export default Home;