"use client";

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { log } from 'console';

const Hero = () => {

  return (
    <div className="text-green-500 hero">
      <div className="flex-1 pt-36 ">
        <h1 className="hero-title">
          Buy, book or rent a car - quickly and easily !
        </h1>
        <p className="hero-subtitle">
          We offer you the best cars at the best prices with our effortless booking process
        </p>
        <CustomButton text="Book now" click={() => console.log("test")} />
      </div>
    </div>
  )
}

export default Hero
