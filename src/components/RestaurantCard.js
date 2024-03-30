import { ImgAPI } from '../Constants';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => {
  const cuisinesString = cuisines.join(", ");
  
  return (
    <div className="card border max-w-[300px] box-border transition-transform duration-[0.3s] ease-[ease] flex flex-col overflow-hidden p-[15px] rounded-xl border-solid  -z-10 bg-white shadow-md " >
      <img className="Restaurant-img w-[260px] h-[220px] object-cover rounded-lg" src={ImgAPI + cloudinaryImageId} alt={name} />
      <p className="Restaurant-name text-lg p-2.5">{name}</p>
      <div className="Restaurant-Info flex flex-col grow w-full">
        <p className="Restaurant-Rating mx-0 my-[5px]">{avgRating + "⭐"}</p>
        <p className="Restaurant-Cuisine mx-0 my-[5px]">{cuisinesString}</p>
      </div>
    </div>
  );
};
export const showDiscount=(RestaurantCard)=>{
  return (props)=>{

    return(
      <>
       <p className="relative text-xl font-extrabold text-white top-[235px] left-4 z-10 bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,153,153,0)_100%)] w-[260px] px-3 py-2   discount">
          {(props?.aggregatedDiscountInfoV3?.header?
            props?.aggregatedDiscountInfoV3?.header
            :"")
            +" "+
            (props?.aggregatedDiscountInfoV3?.subHeader?
              props?.aggregatedDiscountInfoV3?.subHeader
              :
              ""
            )
          }
        </p>
        <RestaurantCard {...props}/>
      </>

    )
  }
}

export default RestaurantCard;
