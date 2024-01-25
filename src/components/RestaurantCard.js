import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const{cloudinaryImageId,name,avgRating,cuisines} = resData?.info;
    return(
        <div className="m-4 p-4 w-[300px] shadow-lg rounded-lg hover:bg-gray-100 ">
            <img 
            className="res-logo rounded-lg size-48"
            alt="res-logo" 
            src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐️</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )
    }
}

export default RestaurantCard;