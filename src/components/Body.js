import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2031014&lng=77.9528058&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const json = await response.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your Internet Connection;
      </h1>
    );

  if (isLoading) {
    return <Shimmer />;
  }

  const topratedListHandler = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res?.info?.avgRating > 4;
    });
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={topratedListHandler}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          filteredRestaurant.map((restaurant, index) => (
            <Link key={index} to={"/restaurants/+ index"}>
              <RestaurantCard resData={restaurant?.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
