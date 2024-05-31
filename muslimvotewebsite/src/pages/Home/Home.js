import React from 'react';
import bannerImage from "../../Images/BannerImage.png";
import usstate from "../../Images/usstate.png";
import muslimvotelogo from "../../Images/muslimvote_logo.png"
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div className="bg-customWhite">
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            <Navbar />
            <img src={usstate} alt="Muslim Vote Text"  className="h-auto w-[51vw] max-w-full pt-[11vh] pl-[8vw]"/>
            <img src={muslimvotelogo} alt="Muslim Vote Text"  className="h-auto w-auto max-w-full absolute bottom-5 right-10"/>
        </div>
    </div>
    
  )
}
