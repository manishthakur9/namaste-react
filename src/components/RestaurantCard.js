import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("cl img", resData?.cloudinaryImageId);

  /* const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData; */

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}/${resData?.cloudinaryImageId}`}
      />

      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4> {resData?.costForTwo} </h4>
      <h4>{resData?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
