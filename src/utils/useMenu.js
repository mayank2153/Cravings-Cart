import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
const useMenu = () => {
    
    const {id} = useParams();
    const [Menu, setMenu] = useState([]);
    useEffect(() => {
        async function callMenu() {
            try {
                const response = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${id}`);

                const json = await response.json();
                setMenu(json?.data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        }

        callMenu();
    }, [id]);
  return Menu
}

export default useMenu