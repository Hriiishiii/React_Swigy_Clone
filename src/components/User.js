import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('setInterval');
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
            <h1>Count:{count}</h1>
            <h1>Name: {props.name} </h1>
            <p>Role: SFCC Developer</p>
        </>
    )
}

export default User;