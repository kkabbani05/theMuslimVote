import React from 'react';
import bannerImage from "../Images/BannerImage.png";
import bannerImage2 from "../Images/BannerImage2.png";
import muslimvotetext from "../Images/muslimvotetext.png";
import usstate from "../Images/usstate.png";
import muslimvotelogo from "../Images/muslimvote_logo.png"
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import Searchbar from '../components/Searchbar';
import TimeCounter from '../components/TimerCounter';
import Footer from '../components/Footer';

export default function Home() {
  return (  
    <div className="bg-customWhite ">
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            <Navbar />
            <div className='grid grid-cols-2 grid-rows-1 pt-[11vh] pl-[8vw]'>
                <div className='col-span-1'>
                    <img src={usstate} alt="USA States" className="h-auto w-[51vw] max-w-full"/>
                </div>
                <div className='col-span-1'>
                    <div className='pt-[13vh]'>
                        <div className='pl-[8vw]'> 
                            <p className="w-[32rem] text-center font-noto-serif px-6 py-2 bg-[#ba0905] text-[#faf2e9] text-[3.1rem] font-bold rounded border-4 border-white ring-2 ring-[#ba0905] cursor-default">WHO WE ARE</p>
                        </div>
                        <div className='pl-[6.5vw] pt-6'>
                            <p className=' w-[36rem] font-noto-serif italic font-bold  text-[2.8rem]'>
                                <span className='text-[#243292] '>A United Muslim Political Front Against</span>
                                <span className='text-[#621b2a] '> GENOCIDE</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                
            <img src={muslimvotelogo} alt="LOGO Muslim VOte"  className="h-auto w-auto max-w-full absolute bottom-5 right-10"/>
        </div>
        
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage2})` }}>
                <Link to="/" className={`w-full`}>
                    <img src={muslimvotetext} alt="Muslim Vote Text"  className="h-auto w-[22rem] max-w-full pl-10 pt-16"/>
                </Link>
                <p className='text-[#16076d] justify-center text-center w-[36rem] pt-2 font-noto-serif font-bold mx-auto text-[4.5rem]'>OUR GOAL</p>
            
        </div>

        <div className="h-[75vh] bg-[#f4e4dd]">
            <Link to="/" className={`w-full`}>
                <img src={muslimvotetext} alt="Muslim Vote Text"  className="h-auto w-[22rem] max-w-full pl-10 pt-12    "/>
            </Link>
            <p className='text-[#09003b] justify-center text-center w-[36rem] pt-12 font-noto-serif font-bold mx-auto text-[2.8rem]'>AMERICAN MISLIMS VOTE AGAINST GENOCIDE</p>
            <p className='text-[#621b2a] justify-center text-center w-[37rem] pt-8 font-norwester font-bold mx-auto text-[1.8rem] pb-16'>WHAT IS YOUR STATE? DISCOVER WHERE YOU STAND</p>
            <Searchbar />
            <div className='flex font-noto-serif container mx-auto text-center justify-center font-bold mt-5'>
                <TimeCounter/>
            </div> 
        </div>

        <div className='h-screen bg-[#f8f3ee]'>
            <p className='text-[#16076d] justify-center text-center w-[36rem] pt-10 font-noto-serif font-bold mx-auto text-[4rem]'>QUESTIONS</p>
        </div>
        <div className='h-screen bg-[#f8f3ee]'>
            <p className='text-[#16076d] justify-center text-center w-[36rem] pt-10 font-noto-serif font-bold mx-auto text-[4rem]'>GET INVOLVED</p>
        </div>
        <Footer />
    </div>
    
  )
}
