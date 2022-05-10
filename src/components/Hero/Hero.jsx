import React from 'react'

import { heroContainer, heroContent, heroIntro, heroName, heroDesc, heroSeparator } from './Hero.module.scss'

const Hero = () => {
  return (
    <div id='hero' className={heroContainer}>
      <div className={heroContent}>
        <div className={heroIntro}>Hi, my name is</div>
        <div className={heroName}>
          <h1>RISKI<br/><span>NUGROHO</span><br/>PUTRA</h1>
        </div>
        <div className={heroSeparator} />
        <div className={heroDesc}>
          <p>
            I'm a Frontend Engineer with about more than 5 years of experience.
            Currently, i'm focused on building advertising generator products at <a href="https://stickearn.com">Stickearn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero