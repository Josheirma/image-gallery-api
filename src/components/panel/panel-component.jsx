import GalleryCard from "../../routes/category/GalleryCard/GalleryCard.jsx";

import "../../global.css";
import styles from "./panel.script.module.css";

const Panel = ({ items }) => {
  //gallery card is an image and text to be displayed in the drop-down panel
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.PanelContainer}>
        {items &&
          items.map((item) => (
            //seperate cards in panel
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
