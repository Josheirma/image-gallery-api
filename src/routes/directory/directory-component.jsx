import Images from "../../components/images/images-component";
import "../../global.css";
import styles from "./directory-component.module.css";

// Server runs on port 5000 (from the /server directory):
//   cd server
//   node server.js
//
// The client application runs on port 3000 and should be started from the root directory:
//   npm start

//holds artist for startup display, artwork uses a server and API
const categories = [
  {
    id: 2,
    name: "Al",
    imageUrl: require("../../assets/artist1.jpg"),
    route: "category/art1",
  },
  {
    id: 1,
    name: "Debbie",
    imageUrl: require("../../assets/artist2.jpg"),
    route: "category/art2",
  },
  {
    id: 3,
    name: "Joe",
    imageUrl: require("../../assets/artist3.jpg"),
    route: "category/art3",
  },
  {
    id: 4,
    name: "Kate",
    imageUrl: require("../../assets/artist4.jpg"),
    route: "category/art4",
  },
  {
    id: 5,
    name: "Bill",
    imageUrl: require("../../assets/artist5.jpg"),
    route: "category/art5",
  },
];

/* // Displays a screen with artists so users can view their work */
const Directory = () => {
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.ArtistsContainer}>
        <div>
          <div className={styles.ArtistTitle}>Select an Artist</div>
          <div className={styles.ImagesContainer}>
            {categories.map((category) => (
              <Images key={category.imageUrl} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Directory;
