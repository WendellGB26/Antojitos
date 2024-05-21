import { useState, lazy, Suspense, useRef } from 'react';

import PortfolioData from './PortfolioData';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import styles from './Portfolio.module.css';

import Card from './Card';

const Portfolio = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  return (
    <section className={styles.portafolio} id="portfolio" ref={sectionRef}>
      <div className="container">
        <div
          className={`${styles.heading} ${
            isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
          }`}
        >
          <h1>Postres</h1>
        </div>
        <div className={styles.contentGrid}>
          <Card project={PortfolioData[0]} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
