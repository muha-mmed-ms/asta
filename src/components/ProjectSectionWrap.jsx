import React from 'react'
import PropertyShowcase from './PropertyShowcase'
import Highlights from './Highlights'
import DistinctionHero from './DistinctionHero'
import RoomGallery from './RoomGallery'
import Hero from './Hero'
import Projects from './Projects'

export default function ProjectSectionWrap() {
    return (
        <div>
            <Hero />
            <PropertyShowcase />
            <RoomGallery />
            <Highlights />
            <DistinctionHero />
            <Projects />
        </div>
    )
}