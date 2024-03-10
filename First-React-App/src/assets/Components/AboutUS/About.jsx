import React from 'react'
import about from '../images/aboutus.jpg';

function About() {
  return (
    <>
    <h1 className='text-red-800 text-7xl font-bold	text-center p-5'>OUR STORY</h1>
    <div className='main columns-2 p-7'>
    <img src={about} className='w-4/5 h-80 p-3 m-5' alt="" />
    <h2 className='text-3xl font-serif font-bold text-blue-500 '>We found somthing and build for you!</h2>
    <p className='font-serif'>Over the course of several months we brought together a team of like-minded people and set out to develop a range of phone accessories both stylish and protective. Each product is curated mindfully to make the customer feel
    Over the course of several months we brought together a team of like-minded people and set out to develop a range of phone accessories both stylish and protective. Each product is curated mindfully to make the customer feel
    Over the course of several months we brought together a team of like-minded people and set out to develop a range of phone accessories both stylish and protective. Each product is curated mindfully to make the customer feel
    </p>
    
    </div>
    </>
  )
}

export default About