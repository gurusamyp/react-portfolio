import logoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'o', 'n']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
  ];
function delaySettings() {
    setTimeout(() =>{
    setLetterClass('text-animate-hover')
  }, 4000);
}
  useEffect(() => {
    return delaySettings ();
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} _12`}>Hi,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logoTitle} alt="Developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / javascript Expert / youtuber</h2>
        <Link to="/contact" className="flat-button ">
          {' '}
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
