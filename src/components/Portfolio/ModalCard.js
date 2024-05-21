import styles from './ModalCard.module.css';

function ModalCard({ project }) {
  const { category, title, image, desc, date, technologies, links } = project;
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/postres/${image}`);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalImg}>
        <img width="500px" height="500px" src={img} alt="" />
      </div>
      <div className={styles.modalText}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.modalActions}>
          {links.page && (
            <a
              title="view project"
              className={styles.actionBtn}
              href={links.page}
              target="_blank"
              rel="noreferrer noopener"
            >
              Haz tu pedido <i className="fas fa-chevron-right" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
