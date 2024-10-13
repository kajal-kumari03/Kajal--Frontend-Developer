import React from 'react'
import './Main.css'
import Navbar from './Navbar'
const Main = () => {
  return (
    <div class='main'>
      <Navbar />
      <div className='landingpage'>
        <div className='font'><p className='m0'>When Innovation</p>
        <p className='m0'> Meets <span>Investmnet</span></p></div>
        <p className='txt'>Empowering Trading Through Advanced Technology</p>
        <div className='dapp'>Open dApp</div>
      </div>
      <div className='gradient'></div>
    </div>
  )
}
export default Main