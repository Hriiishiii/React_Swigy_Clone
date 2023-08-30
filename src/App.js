import React, { Suspense, lazy, useState } from "react";
import reactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/ContextUser";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {

    const [user, setUser] = useState({
        name : 'Hrishi',
        role : 'sfcc developer'
    });

    return (
        <div className="container mx-auto">
            <Provider store = {store}>
                <UserContext.Provider value = {{
                    user : user,
                    setUser : setUser
                }}>
                <Header />
                <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
)};

const Instamart = lazy(() => import('./components/Instamart'));

export const AppRouter = createBrowserRouter ([
    {
        path : '/',
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path: '/',
                element : <Body />
            },
            {
                path: '/home',
                element : <Body />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/contact',
                element : <Contact />
            },
            {
                path : '/restaurants/:id',
                element : <RestaurantMenu />
            },
            {
                path:'/signin',
                element:<LoginForm />
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            },
            {
                path : '/cart',
                element: <Cart />
            }
        ]
    },
]);

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>) // React Component
