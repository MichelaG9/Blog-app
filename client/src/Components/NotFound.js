import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found text-center">
            <h1 className="mt-5">404</h1>
            <h3 className="mb-5">PAGE NOT FOUND</h3>
            <Link to="/">Go back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;