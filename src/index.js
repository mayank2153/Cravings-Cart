
import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';// it is imported by default
// import { Title } from './components/Header'; // it is imported by name thats why it is in curly brackets
// suppose that we need to import more than one element from the component we can use this method also:-
// import * as Obj from './components/Header';
// and use elements like Obj.Title OR Obj.Header, here * means everything and Obj is a name for *
// also, in the component path we can also write Header.js instead of Header
import Body from './components/Body';
import Footer from './components/Footer';

import About from './components/About';

// now we will use router in our app, which means that now we can access pages using something like that localhost:1234/(example) for this we need to import things which will be used for routing
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import  Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
// routing is of two types ; 1) server side routing , 2) client side routing the issue with server side routing is that when we go to the element with server side side routing is that it renders the whole component  again and again when called, <a>(anchor), when routing is done with anchor tag it uses server side routing , so react-router dom provides something known as link which is same as using Anchor tag but uses client side routing, now we are using it in about section.
// outlet is used as an empty template for routing , childrens are always rendered inside outlet, so , if we want to make children of children then we need to add a outlet component inside the children to render their children.

import Profile from "./components/Profile"
import Shimmer from './components/Shimmer';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Code splitting is an essential technique in modern web development to optimize the performance of React applications. It allows you to split your JavaScript bundle into smaller chunks. With code splitting, you can only load the code that is needed in a particular context, reducing the initial load time and improving the overall user experience.
// import Instamart from './components/Instamart'; now we dont import like this but now we will use lazy from react which will lazy load the component and we will use something known as suspense which will be used while loading the component as while we load the lazy component it will take some time to load its seperate js file and while it is loading error will get occur so to handle those errors we will give fallback in suspense to return any jsx while the file is loading(we can see it in routing table below)
const Instamart =lazy(()=>import("./components/Instamart"));
import UserContext from './utils/UserContext';
import {Provider} from "react-redux"
import appStore from './utils/appStore';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Auth from './components/Auth';
const AppLayout=()=>{
    return(
        <>
            <Provider store={appStore}>
                <UserContext.Provider value='Rahul'>
                    <Header />
                </UserContext.Provider>
                <Outlet />
                <Footer />
            </Provider>
        </>
    );
};
// console.log(restaurantApi.data);
// header

// now we will make routing
const AppRouting = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout />,
            errorElement: <Error />,
            children:[
                {
                    path:"/",
                    element:<Body />
                },
                {
                    path:"/about",
                    element:<About />,
                    children:[
                        {
                            path:"profile",
                            element:<Profile name={"Mayank Class"}/>
                        }
                    ]
                },
                {
                    path:"/menu/:id",
                    element:<RestaurantMenu />
                },
                {
                    path:"/instamart",
                    element:<Suspense fallback={<h1>Loading Instamart</h1>}>
                                <Instamart />
                            </Suspense>
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                },
                {
                    path: "/login",
                    element: <Auth />
                }
            ]
        }
        
    ]
)





root.render(<RouterProvider router={AppRouting } />);




  