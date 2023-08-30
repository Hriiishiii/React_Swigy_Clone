import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError([]);
    const {status, statusText} = error;
    return (
        <>
            <h1>{status + ' : ' + statusText}</h1>
            <h3>Oopss!</h3>
            <h6>Something went wrong!!</h6>
        </>
    )
};

export default Error;