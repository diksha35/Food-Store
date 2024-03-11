import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //Filter the restaurant according to the input type
function filterData(searchText,listOfRestaurants){

  const filterData =listOfRestaurants.filter((restaurants)=>
  restaurants?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
  
 return filterData; 

}

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7527421&lng=75.88371599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  //Use SearchData function and set condition if data is empty show error message
const searchData=(searchText, listOfRestaurants)=>{
if(searchText!==""){
  const filteredDataList =filterData(searchText,listOfRestaurants);
  //console.log(data)
  setListOfRestaurants(filteredDataList);
  setErrorMessage("");
  if(filteredDataList?.length===0){
    setErrorMessage("No Matches Restaurant Found");
  }
}else{
    setErrorMessage("");
    console.log("Here error occured")
  }
}


  return (
    <>
      <div className="container">
        {/* //Top rated restaurant  
        <div className="filter">
        
          <button className="filter-btn btn btn-primary "  onClick={() =>
          {
            // console.log("Button CLicked");
            const filteredList=listOfRestaurants.filter(
              (res)=>res.info.avgRating>4
            );
            setListOfRestaurants(filteredList);
            
          }}>Top Rated Restaurants</button></div> */}

        <div className="searchText m-4">
          <div class="input-group mb-3  w-50">
            <input
              type="text"
              class="form-control"
              placeholder="Search Restaurant here"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)

            
              }
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" onClick={()=>{
              //SearchData function for search the restaurants and display the error if no restaurants is found
              searchData(searchText,listOfRestaurants)   
              // const data=filterData(searchText,listOfRestaurants);
             //console.log(data)
              // setListOfRestaurants(data);
              }
              }>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {listOfRestaurants.map((restaurants) => (
            <RestaurantCard
              key={restaurants.info.id}
              resData={restaurants}
            ></RestaurantCard>
          ))}
          {/*
        //Here we can pass index as a key
        -->It is not recommended to use key as index. When id is then we have to use id as key in our card
        {
          (resList).map((restaurants, index)=> 
           <RestaurantCard key={index} resData={restaurants}>
            </RestaurantCard>)

        } */}
          {/* <RestaurantCard resData={resList.restaurants[0]}></RestaurantCard> */}
        </div>
      </div>
    </>
  );
};

export default Body;
