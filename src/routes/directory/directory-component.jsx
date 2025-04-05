import Images from "../../components/images/images-component";
<<<<<<< HEAD
import styles from "../../script.module.css"
=======
import { DirectoryContainer } from "./directory-styles";
//import './directory-styles.css';
import styles from "../../script.module.css";

>>>>>>> fixModuleCSS

const categories = [
  {
    id: 2,
    name: "Al",
    imageUrl: require ("../../assets/artist1.jpg"),
    route: "category/art1",
  },
  {
    id: 1,
    name: "Debbie",
    imageUrl: require ("../../assets/artist2.jpg"),
    route: "category/art2",
  },      
  {
    id: 3,
    name: "Joe",
    imageUrl: require ("../../assets/artist3.jpg"),
    route: "category/art3",
  },
  {
    id: 4,
    name: "Kate",
    imageUrl: require ("../../assets/artist4.jpg"),
    route: "category/art4",
  },
  {
    id: 5,
    name: "Bill",
    imageUrl: require ("../../assets/artist5.jpg"),
    route: "category/art5",
  },
];

const Directory = () => {
  return (
<<<<<<< HEAD
    <div className = {styles.FaceContainer} >
      <div className = {styles.ArtistTitle} >
        Select an Artist
      </div> 
      <div className = {styles.Artists}>
=======
    <div className = {styles.ArtistsContainer}>
      <div>
      <div className = {styles.ArtistTitle} >
        Select an Artist
      </div> 
      <div className = {styles.ImagesContainer}>
>>>>>>> fixModuleCSS
        {categories.map((category) => (
          <Images key={category.imageUrl} category={category} />
        ))}
      </div>
<<<<<<< HEAD
=======
    </div>
>>>>>>> fixModuleCSS
    </div>
  );
};
export default Directory;
