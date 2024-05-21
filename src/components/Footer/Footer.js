import { useState, lazy, Suspense } from 'react';

import hero from '../../assets/Antojitos Logo.png';

import styles from './Footer.module.css';

import Modal from '../Modal/Modal';

const Footer = () => {
  const [modal, setModal] = useState(false);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="img">
          <img
            width="300px"
            height="300px"
            src={hero}
            className={styles.logoImg}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
