import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
const useMenu = () => {
    
    const {id} = useParams();
    const [Menu, setMenu] = useState([]);
    useEffect(() => {
        async function callMenu() {
            try {
                console.log("1")
                const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
                console.log("2")
                const json = await response.json();
                setMenu(json?.data);
                console.log(json)
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        }

        callMenu();
    }, [id]);
  return Menu
}

export default useMenu