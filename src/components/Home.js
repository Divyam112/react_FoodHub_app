import styles from "../styles/body.module.css";
import RestaurantsList from "./RestaurantsList";
import useRestaurantList from "../hooks/useRestaurantList";
import SearchBar from "../pages/SearchBar";
import useOnline from "../hooks/useOnline";
import { ALL_RESTAURANT_URL } from "../utils/Constants.js";

const Home = () => {
  const [
    allRestaurantList,
    setRestaurantList,
    filterRestaurantList,
    setFilterRestaurantList,
  ] = useRestaurantList();

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div>
        <h2>
          please check your internet connection,it seems you are offline!!
        </h2>
      </div>
    );
  }

  if (filterRestaurantList.length == 0 && allRestaurantList.length != 0) {
    return (
      <>
        <SearchBar
          restaurantList={allRestaurantList}
          setFilterRestaurantList={setFilterRestaurantList}
        />
        <div>
          <h1 data-testid="test_rest_not_searched">
            Restaurent does not found !!
          </h1>
        </div>
      </>
    );
  }

  return (
    <div className={styles.main_body}>
      <SearchBar
        restaurantList={allRestaurantList}
        setFilterRestaurantList={setFilterRestaurantList}
      />
      <RestaurantsList restaurantList={filterRestaurantList} />
    </div>
  );
};
export default Home;
