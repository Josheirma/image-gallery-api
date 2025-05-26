import "../../global.css";
import styles from "../art-piece/art-piece.module.css";

const ArtPieceItem = ({ item, updateStars }) => {
  return (
    <div className={styles.ComponentArtpiece}>
      <div className={styles.ContainerForCard}>
        <div className={styles.ImageHeading}> {item.name}</div>
        <div className={styles.ImageHeading}> ${item.price}.00</div>
        <div className={styles.ImageHolder}>
          <img className={styles.Image} src={item.imageUrl} alt={item.name} />
        </div>

        {/*Checkboxes styled and behave like a star rating system*/}
        <div className={styles.InputContainer}>
          <input
          // If the variable is greater than or equal to the required number of checks, update the checkboxes
            checked={item.amountStarsNumber >= 1}
            type={`checkbox`}
            onChange={() => updateStars(item.id, 1)}
          />
          <input
            checked={item.amountStarsNumber >= 2}
            type={`checkbox`}
            onChange={() => updateStars(item.id, 2)}
          />
          <input
            checked={item.amountStarsNumber >= 3}
            type={`checkbox`}
            onChange={() => updateStars(item.id, 3)}
          />
          <input
            checked={item.amountStarsNumber >= 4}
            type={`checkbox`}
            onChange={() => updateStars(item.id, 4)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtPieceItem;
