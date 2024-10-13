import React from 'react'
import './Main.css'
import Graph from '../assets/Graph.svg'
import Vector from '../assets/Vector.svg'
import wallet from '../assets/wallet.svg'
import FutureTechnology from '../assets/FutureTechnology.svg'
const About = () => {
  return (
    <div className='About'>
        <p className='About1'>About EthAi</p>
        <p className='About2'>At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools </p>
        <p className='About2'>that help traders keep up with all new market trends, track top traders’ movements.</p>
        <div className='abt-btn'>Read More</div>
        <div className='About4'>
          <div className='About41'>
            <div>
              <img src={Graph} alt="" srcset="" />
              <p>Stay Ahead</p>
              <p>No more guesswork—get clear, trustable insights.</p>
            </div>
         
            <div>
              <img src={Vector} alt="" srcset="" />
              <p>Simple, Not Overwhelming</p>
              <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
      
          </div>
          <div className='About42'>
          <div>
              <img src={wallet} alt="" srcset="" />
              <p>Know Your Assets</p>
              <p>Always stay on top of how your investments are performing.</p>
            </div>
            <div>
              <img src={FutureTechnology} alt="" srcset="" />
              <p>Future-Proof</p>
              <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About