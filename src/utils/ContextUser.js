import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : 'Hrishikesh',
        role : 'Developer'
    }
});

UserContext.displayName = 'UserContext';

export default UserContext;