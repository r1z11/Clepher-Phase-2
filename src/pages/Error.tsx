import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    const parseError = () => {
        if (typeof error === 'string') {
            // Handle string errors
            return <div>Oops! An error occurred: {error}</div>;
        } else if (error instanceof Error) {
            // Handle specific Error types (if known)
            return <div>An error occurred: {error.message}</div>;
        } else {
            // Handle unknown errors
            return <div>An unexpected error occurred.</div>;
        }
    }

    return (
        <div id="error-page" className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
            <p className="text-gray-500 text-4xl font-bold">Oops! Page Not Found</p>
            <p className="text-gray-500 mt-12 text-lg">{parseError()}</p>
            <Link className="text-gray-500 mt-12 text-lg" to="/">Back to Home page</Link>
        </div>
    );
}