import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <h1 className="text-7xl py-10 md:py-56 mx-auto text-center font-bold">
                Oops Not found 404 page 🦹! 
            </h1>
            <Link to={'/'} className="btn btn-primary px-10 text-lg">&larr; Go Back Home</Link>
        </div>
    );
};

export default Error404;