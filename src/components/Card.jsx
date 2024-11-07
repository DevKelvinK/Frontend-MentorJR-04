import styles from './Card.module.css';

export function Card({h2, paragraph, src, customClass}) {
  return (
    <article className={`${styles.card} ${styles[customClass]}`}>
      <div>
        <h2>{h2}</h2>
        <p>{paragraph}</p>
      </div>

      <img src={src} />
    </article>
  );
}