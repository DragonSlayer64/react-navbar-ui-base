import React from 'react'

import {Blog, Features, Footer, Header, Possibility, WhatGTP3} from './containers'
import {CTA, Brand, Navbar} from './components'
import './app.css'


const App = () => {
  return (
    <div className='app'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand/>
        <WhatGTP3/>
        <Features />
        <Possibility />
        <CTA/>
        <Blog />
        <Footer />

    </div>
  )
}

export default App