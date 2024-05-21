import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/Antojitos Logo.png';
import styles from './Hero.module.css';
import { constants } from '../../utils/constants';
import useIsInViewport from '../../utils/hooks/useIsInViewport';

function Hero() {
  const sectionRef = useRef();
  const isInViewport = useIsInViewport(sectionRef);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
      ref={sectionRef}
    >
      {/*       <div className={styles.boxP}>ss</div>
      <div className={styles.boxS}>f</div> */}
      {/*       <div className="container f_flex top">
       */}{' '}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h4
            className={isInViewport ? 'useSlideInLeft' : 'useSlideInLeftEnter'}
          >
            ¡HOLA!
          </h4>
          <h1>
            Soy <span>Reichel Moya</span>
          </h1>

          <h2>
            <Typewriter
              words={['Endulzate', 'Disfruta', 'Antojate']}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h3>Postres que enamoran, sabores que perduran.</h3>
        </div>
        <div>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
