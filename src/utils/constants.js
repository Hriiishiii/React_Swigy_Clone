export const LOGO_URL = () => (
    <figure className=''>
        <img className= "h-20" src={require('./Hrishi_Kitchen.png')} />
    </figure>
)

export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const Swiggy_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING";

export const Swiggy_Menu_URL = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=';
