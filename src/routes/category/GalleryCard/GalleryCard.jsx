import React from "react";
import "../../../global.css";
import styles from "./GalleryCard.module.css";

//for panel
export default function GalleryCard({ title, imageUrl, starsLabel, price }) {
  return (
    <div className={styles.Text}>
      <p className={styles.title}>{title}</p>

      <div className={styles.ImageContainer}>
        <img src={imageUrl} alt="gallery" className={styles.PanelImage} />
      </div>

      <p>{price}</p>
      <section>{starsLabel}</section>
      <div>----</div>
    </div>
  );
}
