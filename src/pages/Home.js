import React from 'react'
import Hero from '../components/Hero/Hero'
import HomeContent from '../components/HomeContent/HomeContent'
import SocialsBanner from '../components/SocialsBanner/SocialsBanner'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
        <Hero />
        <HomeContent />
        <SocialsBanner />
        <Footer />
    </>
  )
}

export default Home