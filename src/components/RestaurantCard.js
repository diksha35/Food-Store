import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <>
      <div className="col-md-3">
        <div className="card m-1" style={{ width: "16rem" }}>
          <img
            className="card-img-top res-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_auto,h_auto/" +
              cloudinaryImageId
            }
            alt="res-logo"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{cuisines.join(", ")}.</p>
            <span className="card-span-content">
              <h4
                className="rating"
                style={
                  avgRating < 4
                    ? { backgroundColor: "red" }
                    : { color: "white" }
                }
              >
                <FontAwesomeIcon icon={faStar} />
                {avgRating}
              </h4>
              <h4>.</h4>
              <h4>{costForTwo}</h4>
              <h4>.</h4>
              <h4>{sla.lastMileTravelString}</h4>
            </span>
          </div>
        </div>
      </div>

      {/* <div className="res-card" >
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/"+cloudinaryImageId} alt="res-logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}-star</h4>
        <h4>{costForTwo}</h4>
        </div> */}
    </>
  );
};

export default RestaurantCard;
