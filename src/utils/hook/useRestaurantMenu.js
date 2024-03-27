import { useEffect, useState } from "react";
import { Menu_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData);
    // console.log("Name, Cuisine, CastForTwoMessage :" +jsonData.data?.cards[0]);
    // console.log("Item Card : "+
    //   jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  };
  return resInfo;
};
export default useRestaurantMenu;
