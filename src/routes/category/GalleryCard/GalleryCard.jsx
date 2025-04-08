import React from "react";
//import styles from "./GalleryCard.module.css";
import styles from "../../../script.module.css"

export default function GalleryCard({ title, imageUrl, starsLabel, price, key }) {
  return (
    <div className={styles.Text}>
       <div key={key}>
      <p className={styles.title}>{title}</p>

      <div className = {styles.ImageContainer}>
      <img src={imageUrl} alt="gallery" className={styles.PanelImage} />
      </div>
      
      <p>{price}</p>
      <section>{starsLabel}</section>
      <div>----</div>
    </div>
    </div>
    
  );
}
