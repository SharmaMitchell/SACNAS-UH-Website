import React, { useEffect } from 'react'
import ResourcesContent from '../components/ResourcesContent/ResourcesContent'

function Resources() {
  useEffect(() => {
    document.title = "Resources - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);
  return (
    <>
        <ResourcesContent />
    </>
  )
}

export default Resources