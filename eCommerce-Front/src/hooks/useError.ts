import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const useError = () => {
    const error = useRouteError();
    let errorCode: number;
    let errorMessage: string;
    if (isRouteErrorResponse(error)) {
        errorCode = error.status;
        errorMessage = error.statusText;
    } else {
        errorCode = 404;
        errorMessage = "Page not found";
    }
    return { errorCode, errorMessage }
}

export default useError