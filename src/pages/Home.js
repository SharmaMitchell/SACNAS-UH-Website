import React, { useEffect } from 'react'
import HomeContent from '../components/HomeContent/HomeContent'

function Home() {
  useEffect(() => {
    document.title = "SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
        <HomeContent />
    </>
  )
}

export default Home