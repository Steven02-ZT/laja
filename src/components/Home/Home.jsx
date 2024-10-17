import React from 'react'
import Productos from './Productos'
import About from './About'
import Banner from './Banner'
import History from './History'
import Types from './Types'
import Adventages from './Adventages'
import Services from './Services'
import MisionVision from './VisionMision'

function Home() {
    return (
        <main>
            <Banner />
            <History />
            <About />
            <MisionVision/>
            <Productos />
            <Types/>
            <Adventages/>
        </main>
    )
}

export default Home
