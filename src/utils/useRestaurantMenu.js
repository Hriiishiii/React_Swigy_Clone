import { Swiggy_Menu_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restroMenuId, setRestroMenuId] = useState(null);

    useEffect(() => {
        getMenuId();
    }, [])

    async function getMenuId () {
        const data = await fetch(Swiggy_Menu_URL + id);
        const apiData = await data.json();
        setRestroMenuId(apiData.data)
    }

    return restroMenuId;
}

export default useRestaurant;
