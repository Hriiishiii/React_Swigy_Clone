import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/ContextUser';
import { useSelector } from 'react-redux';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    const {user} = useContext(UserContext);

    const cartItems = useSelector((store) => store?.cart?.items)

    return (
        <>
            <div className="flex justify-between items-center bg-gray-50 shadow-md">
                <LOGO_URL />
                <div className=''>
                    <ul className='flex'>
                        <li className='pl-3'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='pl-3'>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li className='pl-3'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className='pl-3'>
                            <Link to='/instamart'>Instamart</Link>
                        </li>
                        <li className='pl-3'>
                            <Link to='/cart'>Cart: {cartItems?.length}</Link>
                        </li>
                    </ul>
                </div>
                {user.name}
                <div className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded m-3'>
                    {loggedIn ? <Link to="/signin"><button onClick={() => setLoggedIn(false)}>Sign In</button></Link> : <Link to='/'><button onClick={() => setLoggedIn(true)}>Sign Out</button></Link>}
                </div>
            </div>
        </>
    )
};

export default Header;
