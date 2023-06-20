import styles from "../styles/body.module.css";
import { useState } from "react";

const SearchBar = (param) => {
  const [searchText, setSearchText] = useState("");
  const { restaurantList, setFilterRestaurantList } = param;

  const searchTextInRestaurants = () => {
    setFilterRestaurantList(
      restaurantList.filter((restaurant) => {
        return restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchText.toLowerCase());
      })
    );
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search restaurants"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={searchTextInRestaurants}>Search</button>
    </div>
  );
};

export default SearchBar;
