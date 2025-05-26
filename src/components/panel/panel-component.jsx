import GalleryCard from "../../routes/category/GalleryCard/GalleryCard.jsx";

import "../../global.css";
import styles from "./panel.script.module.css";

const Panel = ({ items }) => {
  // Gallery card combines an image and text for display in the dropdown panel
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.PanelContainer}>
        {items &&
          items.map((item) => (
            // Each gallery card (image and text) is displayed separately within the dropdown panel
            <GalleryCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.name}
              price={`$${item.price}.00`}
              starsLabel={item.amtstars}
            />
          ))}
      </div>
    </div>
  );
};

export default Panel;
