import React, {  useState } from 'react';
import { ImgAPI } from '../Constants';
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice';
const Category = ({ category }) => {

    const [showItems, setShowItems] = useState(false);

    const handleAccordion = () => {
        setShowItems(prevState => !prevState);
    };
    const dispatch=useDispatch();
    const handleAddItem=(itemName)=>{
        dispatch(addItems(itemName));
        console.log(itemName);
    };
    return (
        <div className='menu-category'>
        
            <button onClick={handleAccordion}>
            <div className="menu-section">
                <h2 className="menu-title">
                    {category?.card?.card?.title}
                    {category?.card?.card?.itemCards ? `(${category?.card?.card?.itemCards.length})` : `(${category?.card?.card?.categories.length})`}
                </h2>
                <img className='drop-down-icon' src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
                
            </div>
            </button>
            {showItems && (
                <div className="menu-items">
                    {category?.card?.card?.itemCards?
                        category?.card?.card?.itemCards?.map((item, index) => (
                        <div key={index} className="menu-item">
                            {/* Item rendering code */}
                            <div className='menu-item-left'>
                                                <div className="item-name">{item?.card?.info?.name}</div>
                                                <div className="item-price">₹
                                                    {item?.card?.info?.price ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}
                                                </div>
                                                <p className='item-description'>
                                                    {item?.card?.info?.description ? item?.card?.info?.description : ""}
                                                </p>
                                            </div>
                                            <div className='menu-item-right'>
                                                {item?.card?.info?.imageId ?
                                                    <div>
                                                        <img src={ImgAPI + item?.card?.info?.imageId} className='item-img'></img>
                                                        <button className='Add-Button' onClick={()=>handleAddItem(item)}>Add+</button>
                                                    </div>
                                                    : <button className='Add-Button' onClick={()=>handleAddItem(item)}>Add+</button>
                                                }
                                            </div>
                        </div>
                    ))
                    :
                    category?.card?.card?.categories?.map((item, index) => (
                        
                        <div key={index} className="menu-items-category">
                            <div className='menu-item-subhead'>{item?.title}</div>
                            {item?.itemCards.map((ItemCategory, indexCategory) =>(
                                <div className='menu-item-category' key={indexCategory}>
                                <div className='menu-item-left'>
                                                <div className="item-name">{ItemCategory?.card?.info?.name}</div>
                                                <div className="item-price">₹
                                                    {ItemCategory?.card?.info?.price ? (ItemCategory?.card?.info?.price / 100) : (ItemCategory?.card?.info?.defaultPrice / 100)}
                                                </div>
                                                <p className='item-description'>
                                                    {ItemCategory?.card?.info?.description ? ItemCategory?.card?.info?.description : ""}
                                                </p>
                                </div>
                                <div className='menu-item-right'>
                                                {ItemCategory?.card?.info?.imageId ?
                                                    <div>
                                                        <img src={ImgAPI + ItemCategory?.card?.info?.imageId} className='item-img'></img>
                                                        <button className='Add-Button' 
                                                        onClick={()=>handleAddItem(ItemCategory)} >Add+</button>
                                                    </div>
                                                    : <button className='Add-Button' onClick={()=>handleAddItem(ItemCategory)}>Add+</button>
                                                }
                                </div>
                                </div>
                            
                            ))}
                        </div>
                    ))
                    }
                </div>
            )}
    
        </div>
    );
};
export default Category