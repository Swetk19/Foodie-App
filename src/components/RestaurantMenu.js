import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

   const {resId} = useParams();
   const resInfo = useRestaurantMenu(resId);

   const [showIndex, setShowIndex] = useState(null);
    

    if (resInfo === null) return <Shimmer/>;
    console.log(resInfo)
        

    const { name, cuisines, costForTwoMessage } = 
    resInfo?.cards[0]?.card?.card?.info;

    const{itemCards} =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    const category =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(category)

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            {category.map((category, index) => (<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            />))}
        </div>
    )
}

export default RestaurantMenu