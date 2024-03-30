    import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import Shimmer from './Shimmer';
    import useMenu from '../utils/useMenu';
    import { ImgAPI } from '../Constants';
    import Category from './category';


    const RestaurantMenu = () => {
        const temp = useMenu();
        // Check if temp is not undefined
        const Menu = temp ? temp.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards : null;
        const profile = temp ? temp.cards?.[2]?.card?.card?.info : null;
        const FilteredMenu = Menu ? Menu.filter((item) => item?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' || item?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory') : [];        
        return (
            <div className="menu ">
                {FilteredMenu.length === 0 ? (
                    <Shimmer />
                ) : (
                    <>  
                        {console.log(Menu)}
                        {profile?
                            <div className='profile'>
                                    <div className='profile-info'>
                                        <p className='profile-name'>
                                            {profile?.name} 
                                        </p>
                                        <p className='profile-info-other'>
                                            {profile?.cuisines.join(',')}
                                        </p> 
                                        <p className='profile-info-other'>
                                            {profile?.locality}
                                        </p>
                                    </div>
                                    <div className='profile-right'>
                                        <div className='profile-right-rating'>
                                            <img className='profile-right-star-img' src="https://img.icons8.com/ios-filled/50/star--v1.png" alt="star--v1"/>
                                            <p>
                                                {profile?.avgRating}
                                            </p>
                                        </div>
                                        
                                        <p className='profile-right-totalrating'>{profile?.totalRatingsString}</p>
                                    </div>
                            </div>
                                
                                : ""
                            }
                        {FilteredMenu.map((category, index) => (
                            <Category key={index} category={category} />
                        ))}
                    </>
                )}
            </div>
        );
    };
    
    export default RestaurantMenu;
