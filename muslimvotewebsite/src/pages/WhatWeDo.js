import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Link } from "react-router-dom";

export default function WhatWeDo() {

  function handleScrollToElement(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='bg-[#f8f3ee]'>
      <div className='h-screen grid grid-rows-4'>
        <div className='row-span-1'>
          <Navbar />
        </div>
        <div className='row-span-3 text-[#09003b] justify-center text-center pt-20 font-noto-serif font-bold mx-auto text-[4rem]'>
          WHAT WE DO
          <div className='w-full mx-auto justify-center text-center pt-12'>
            <div className='grid grid-cols-4 gap-x-20 w-full mx-auto justify-center'>
              <button onClick={() => handleScrollToElement("collect-data")} key={"collect-data"} className="col-span-1 w-[18rem] text-center px-6 py-6 bg-[#09003b] text-[#faf2e9] text-[2rem] rounded-xl hover:bg-[#180296]">
                COLLECT DATA
              </button>
              <button onClick={() => handleScrollToElement("strategise")} key={"strategise"} className="col-span-1 w-[18rem] text-center px-6 py-6 bg-[#09003b] text-[#faf2e9] text-[2rem] rounded-xl hover:bg-[#180296]">
                STRATEGISE
              </button>
              <button onClick={() => handleScrollToElement("act")} key={"act"} className="col-span-1 w-[18rem] text-center px-6 py-6 bg-[#09003b] text-[#faf2e9] text-[2rem] rounded-xl hover:bg-[#180296]">
                ACT
              </button>
              <button onClick={() => handleScrollToElement("impact")} key={"impact"} className="col-span-1 w-[18rem] text-center px-6 py-6 bg-[#09003b] text-[#faf2e9] text-[2rem] rounded-xl hover:bg-[#180296]">
                IMPACT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen bg-[#09003b]' id="collect-data">
        <Link to="/" className={`w-full text-white`}>
          <p className='pl-5 pt-3'>
            <span className='font-norwester font-bold text-[1.9rem]'>THEMUSLIM</span>
            <span className='text-[2.5rem] font-roboto-mono'>VOTE</span>
          </p>
        </Link>
        <p className='text-white justify-center text-center w-[36rem] pt-5 font-open-sans font-bold mx-auto text-[4rem]'>COLLECT DATA</p>
        <div className='justify-center text-center w-[30rem] mx-auto pt-20'>
          <p className='text-[#fffbf7] text-[2.7rem] font-noto-serif'>OF THE 1.5 MILLION REGISTERED MUSLIM VOTERS,</p>
          <p className='text-[#cd4746] text-[4.5rem] font-bold font-archivo'>52%</p>
          <p className='text-[#fffbf7] text-[2.7rem] font-noto-serif'>VOTED EARLY</p>
        </div>
      </div>

      <div className='h-screen bg-[#16076d]' id="strategise">
        <Link to="/" className={`w-full text-white`}>
          <p className='pl-5 pt-3'>
            <span className='font-norwester font-bold text-[1.9rem]'>THEMUSLIM</span>
            <span className='text-[2.5rem] font-roboto-mono'>VOTE</span>
          </p>
        </Link>
        <p className='text-white justify-center text-center w-[36rem] pt-5 font-open-sans font-bold mx-auto text-[4rem]'>STRATEGISE</p>
      </div>

      <div className='h-screen bg-[#09003b]' id="act">
        <Link to="/" className={`w-full text-white`}>
          <p className='pl-5 pt-3'>
            <span className='font-norwester font-bold text-[1.9rem]'>THEMUSLIM</span>
            <span className='text-[2.5rem] font-roboto-mono'>VOTE</span>
          </p>
        </Link>
        <p className='text-white justify-center text-center w-[36rem] pt-5 font-open-sans font-bold mx-auto text-[4rem]'>ACT</p>
      </div>

      <div className='h-screen bg-[#16076d]' id="impact">
        <Link to="/" className={`w-full text-white`}>
          <p className='pl-5 pt-3'>
            <span className='font-norwester font-bold text-[1.9rem]'>THEMUSLIM</span>
            <span className='text-[2.5rem] font-roboto-mono'>VOTE</span>
          </p>
        </Link>
        <p className='text-white justify-center text-center w-[36rem] pt-5 font-open-sans font-bold mx-auto text-[4rem]'>IMPACT</p>
      </div>
    </div>
  )
}
