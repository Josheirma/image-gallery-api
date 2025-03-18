import React from "react";
import styles from "./GalleryCard.module.css";

export default function GalleryCard({ title, imageUrl, starsLabel, price }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <img src={imageUrl} alt="gallery image" className={styles.image} />
      <p>{price}</p>
      <section className={styles.starsLabel}>{starsLabel}</section>
    </div>
  );
}
