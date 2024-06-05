import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(json?.data?.cards);
  };

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  const topratedListHandler = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res?.card?.card?.info?.avgRating > 4;
    });
    setListOfRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {}}>Search</button>
        </div>
        <button className="filter-btn" onClick={topratedListHandler}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={index}
              resData={restaurant?.card?.card?.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
